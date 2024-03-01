import { config } from 'src/config'
import { convertResolutionToSeconds, formatNumeral } from '../functions'
import { useMemo } from 'react'
import { useDerivedStateSimpleSwap } from 'src/ui/swap/simple/derivedstate-simple-swap-provider'

export interface PAIR_ITEM {
  display: string
  symbol: string
  base: string
  quote: string
  baseUnit: number
  quoteUnit: number
}

const channelToSubscription = new Map()
let pairInfo: PAIR_ITEM
export const useStreaming = () => {
  const { mutate : { addNewTransaction} } = useDerivedStateSimpleSwap()
  return useMemo(() => {
    function getNextDailyBarTime(barTime: number, resolution: string) {
      const nextSeconds = convertResolutionToSeconds(resolution)
      if (nextSeconds) {
        return barTime + nextSeconds * 1000
      } else {
        const date = new Date(barTime)
        date.setMonth(date.getMonth() + 1)
        return date.getTime()
      }
    }

    let subscriptionItemCandle: any = null
    function handleCandle(unpacker: any) {
      const quoteUnit = 6
      const barData: any = {
        time: unpacker.next().value,
        open: formatNumeral(unpacker.next().value, quoteUnit),
        high: formatNumeral(unpacker.next().value, quoteUnit),
        low: formatNumeral(unpacker.next().value, quoteUnit),
        close: formatNumeral(unpacker.next().value, quoteUnit),
        volume: formatNumeral(unpacker.next().value, quoteUnit),//pairInfo?.baseUnit),
        symbol: unpacker.next().value,
        type: unpacker.next().value
      }
      // const tradingStore = useTradingStore()
      // tradingStore.updateCurrentBar({
      //   ...barData,
      //   timestamp: barData.time
      // })
      const channelString = `${barData.symbol.toLowerCase()}`
      if (!subscriptionItemCandle) {
        subscriptionItemCandle = channelToSubscription.get(channelString)
      }
      // const subscriptionItem = channelToSubscription.get(channelString)
      if (!subscriptionItemCandle) {
        return
      }

      if (subscriptionItemCandle.symbol.toLowerCase() !== barData.symbol.toLowerCase()) return

      const lastDailyBar = subscriptionItemCandle.lastDailyBar
      const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time, subscriptionItemCandle.resolution)

      let bar: any

      if (barData.time >= nextDailyBarTime) {
        bar = {
          time: nextDailyBarTime,
          open: barData.open,
          high: barData.high,
          low: barData.low,
          close: barData.close,
          volume: barData.volume
        }
      } else {
        bar = {
          ...lastDailyBar,
          high: Math.max(lastDailyBar.high, Number(barData.high)),
          low: Math.min(lastDailyBar.low, Number(barData.low)),
          close: barData.close,
          volume: barData.volume
        }
      }
      subscriptionItemCandle.lastDailyBar = bar

      // Send data to every subscriber of that symbol
      subscriptionItemCandle.handlers.forEach((handler: any) => handler.callback(bar))
    }

    function handleTransaction(unpacker: any) {
      const transaction = {
        type: unpacker.next().value,
        maker: unpacker.next().value,
        hash: unpacker.next().value,
        timestamp: unpacker.next().value,
        amountIn: unpacker.next().value,
        amountOut: unpacker.next().value,
        price: unpacker.next().value,
        tokenIn: unpacker.next().value,
        tokenOut: unpacker.next().value,
      }
      addNewTransaction(transaction)
    }


    function subscribeOnStream(
      symbolInfo: any,
      resolution: any,
      onRealtimeCallback: any,
      subscriberUID: any,
      onResetCacheNeededCallback: any,
      lastDailyBar: any
    ) {
      localStorage.setItem(config.RESOLUTION_STOGRATE, resolution)
      const channelString = symbolInfo.ticker.toLowerCase()

      const handler = {
        id: subscriberUID,
        callback: onRealtimeCallback
      }
      subscriptionItemCandle = null
      let subscriptionItem = channelToSubscription.get(channelString)
      if (subscriptionItem) {
        // Already subscribed to the channel, use the existing subscription
        subscriptionItem.handlers.push(handler)
        return
      }
      subscriptionItem = {
        subscriberUID,
        resolution,
        lastDailyBar,
        symbol: symbolInfo.key,
        handlers: [handler]
      }


      channelToSubscription.set(channelString, subscriptionItem)
      // const resolutions: any = RESOLUTION
      // getCandle(resolutions[resolution], symbolInfo.key)
      // SocketVue.getCandle(resolutions[resolution], symbol)
      // socket.emit('SubAdd', { subs: [channelString] })
    }

    function unsubscribeFromStream(subscriberUID: any) {
      // Find a subscription with id === subscriberUID
      for (const channelString of channelToSubscription.keys()) {
        const subscriptionItem = channelToSubscription.get(channelString)
        const handlerIndex = subscriptionItem.handlers.findIndex((handler: any) => handler.id === subscriberUID)

        if (handlerIndex !== -1) {
          // Remove from handlers
          subscriptionItem.handlers.splice(handlerIndex, 1)

          if (subscriptionItem.handlers.length === 0) {
            // Unsubscribe from the channel if it was the last handler
            // socket.emit('SubRemove', { subs: [channelString] })
            channelToSubscription.delete(channelString)
            break
          }
        }
      }
    }
    return {
      subscribeOnStream,
      unsubscribeFromStream,
      handleCandle,
      handleTransaction
    }
  }, [])

}
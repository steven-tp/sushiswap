
import { config } from 'src/config'
import { formatNumeral } from './functions'
import { convertResolutionToSeconds } from './functions'
import { RESOLUTION } from './constants'
import { getCandle } from './socket'
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

export function getNextDailyBarTime(barTime: number, resolution: string) {
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
export function handleCandle(unpacker: any) {
  const barData: any = {
    time: unpacker.next().value,
    open: formatNumeral(unpacker.next().value, pairInfo?.quoteUnit),
    high: formatNumeral(unpacker.next().value, pairInfo?.quoteUnit),
    low: formatNumeral(unpacker.next().value, pairInfo?.quoteUnit),
    close: formatNumeral(unpacker.next().value, pairInfo?.quoteUnit),
    volume: formatNumeral(unpacker.next().value, pairInfo?.baseUnit),
    symbol: unpacker.next().value,
    type: unpacker.next().value
  }
  // const tradingStore = useTradingStore()
  // tradingStore.updateCurrentBar({
  //   ...barData,
  //   timestamp: barData.time
  // })
  const channelString = `0~${barData.symbol.toLowerCase()}`
  if (!subscriptionItemCandle) {
    subscriptionItemCandle = channelToSubscription.get(channelString)
  }
  // const subscriptionItem = channelToSubscription.get(channelString)

  if (!subscriptionItemCandle) {
    return
  }
  if (subscriptionItemCandle.symbol !== barData.symbol) return

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

export function updatePair(pair: any) {
  pairInfo = pair
}

export function subscribeOnStream(
  symbolInfo: any,
  resolution: any,
  onRealtimeCallback: any,
  subscriberUID: any,
  onResetCacheNeededCallback: any,
  lastDailyBar: any
) {
  localStorage.setItem(config.RESOLUTION_STOGRATE, resolution)
  const symbol = symbolInfo.name.toLowerCase()
  // const systemStore = useSystemStore()
  // pairInfo = systemStore.pairsBySymbol[symbol]
  const channelString = `0~${symbol}`
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
    symbol: symbol,
    handlers: [handler]
  }

  channelToSubscription.set(channelString, subscriptionItem)
  const resolutions: any = RESOLUTION
  getCandle(resolutions[resolution], symbol)
  // SocketVue.getCandle(resolutions[resolution], symbol)
  // socket.emit('SubAdd', { subs: [channelString] })
}

export function unsubscribeFromStream(subscriberUID: any) {
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

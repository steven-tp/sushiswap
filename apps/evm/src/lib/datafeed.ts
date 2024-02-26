// import CONFIG from '@/config/config'
import { RESOLUTION } from './constants'
// import { subscribeOnStream, unsubscribeFromStream } from './streaming'
// Makes requests to CryptoCompare API
const BASE_URL = ''
export async function makeApiRequest(path: string) {
  try {
    const response = await fetch(`${BASE_URL}/${path}`)
    return response.json()
  } catch (error: any) {
    throw new Error(`CryptoCompare request error: ${error.status}`)
  }
}

const lastBarsCache = new Map()
// DatafeedConfiguration implementation
const configurationData = {
  // Represents the resolutions for bars supported by your datafeed
  supported_resolutions: [1, 5, 15, 30, 60, '240', '1D', '5D', '1W', '1M'],
  // The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
  symbols_types: [{ name: 'crypto', value: 'crypto' }]
}

export const datafeed = {
  onReady: (callback: any) => {
    setTimeout(() => callback(configurationData))
  },
  resolveSymbol: async (symbolName: any, onSymbolResolvedCallback: any, onResolveErrorCallback: any) => {
    if (!symbolName) {
      onResolveErrorCallback('Cannot resolve symbol')
      return ''
    }
    // Symbol information object
    const symbolInfo = {
      name: symbolName,
      description: symbolName.toUpperCase(),
      // type: symbolItem.type,
      session: '24x7',
      // eslint-disable-next-line new-cap
      // exchange: symbolItem.exchange,
      // timezone: moment.tz.guess() || 'Asia/Singapore',
      minmov: 1,
      pricescale: '1e8',
      has_intraday: true,
      has_no_volume: false,
      has_weekly_and_monthly: true,
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 3,
      data_status: 'streaming'
    }
    onSymbolResolvedCallback(symbolInfo)
  },

  getBars: async (
    symbolInfo: any,
    resolution: string,
    rangeStartDate: number,
    rangeEndDate: number,
    onResult: any,
    onError: any,
    isFirstCall: boolean
  ) => {
    const resolutions: any = RESOLUTION
    const from = rangeStartDate * 1000
    const to = rangeEndDate * 1000
    const urlParameters: any = {
      pair: symbolInfo.full_name?.toLowerCase(),
      from: from,
      to: to,
      type: resolutions[resolution] || 'H1'
    }
    const query = Object.keys(urlParameters)
      .map((name) => `${name}=${encodeURIComponent(urlParameters[name])}`)
      .join('&')
    try {
      let url = `market/history-candle?${query}`
      const res = await makeApiRequest(url)
      if ((res.data && !res.status) || res.data.length === 0) {
        // "noData" should be set if there is no data in the requested period
        onResult([], { noData: true })
        return
      }
      let bars: any = []
      res.data.forEach((bar: any) => {
        if (bar.time >= from && bar.time < to) {
          bars = [
            ...bars,
            {
              time: bar.time,
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
              volume: bar.volume
            }
          ]
        }
      })
      if (isFirstCall) {
        lastBarsCache.set(symbolInfo.full_name, {
          ...bars[bars.length - 1]
        })
      }
      onResult(bars, { noData: false })
    } catch (error) {
      onError(error)
    }
  },

  subscribeBars: (symbolInfo: any, resolution: any, onRealtimeCallback: any, subscriberUID: any, onResetCacheNeededCallback: any) => {
    // subscribeOnStream(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback, lastBarsCache.get(symbolInfo.full_name))
  },
  unsubscribeBars: (subscriberUID: any) => {
    // unsubscribeFromStream(subscriberUID)
  }
}

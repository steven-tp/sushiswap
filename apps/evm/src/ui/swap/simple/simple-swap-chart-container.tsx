'use client'
import {
  FC, useCallback, useEffect, useState
} from 'react'
import { config } from 'src/config'
import { widget } from 'public/charting_library/charting_library.min'
import { useIsMounted } from '@sushiswap/hooks'
import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'
import { useSocket } from 'src/lib/hooks/useSocket'
import { useDataFeed } from 'src/lib/hooks/useDataFeed'
// import { getCandle } from 'src/lib/socket'
import { RESOLUTION } from 'src/lib/constants'
import { usePriceConnfig } from 'src/lib/hooks/api/usePriceConfig'
import { Button, Currency } from '@sushiswap/ui'
import { SimpleSwapLineChart } from './simple-swap-line-chart'
export const SimpleSwapChartContainer: FC = ()=> {
  const isMounted =  useIsMounted()
  const { datafeed } = useDataFeed()
  const { getCandle } = useSocket()
  const {
    state: { token0, token1 },
    mutate: { switchTokens },
  } = useDerivedStateSimpleSwap()
  const _RESOLUTION: any = RESOLUTION
  const precision = usePriceConnfig(token0?.wrapped.address, token1?.wrapped.address)

  // let chartWidget: any
  const chartConfig = {
    interval: '1D',
    libraryPath: '/charting_library/',
    chartsStorageApiVersion: '1.1',
    theme: 'Dark',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true,
    toolbarBg: '#272727',
    resolution: [1, 5, 15, 30, 60, 240, '1D', '5D', '1W', '1M'],
    btn_resolution: ['1m', '5m', '15m', '30m', '1H', '4H', '1D', '5D', '1W', '1M']
  }
  // // Check to see if Media-Queries are supported
  // if (window.matchMedia) {
  //   // Check if the dark-mode Media-Query matches
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     // Dark
  //     chartConfig.theme = 'Dark'
  //     chartConfig.toolbarBg = '#272727'

  //   } else {
  //     // Light
  //     chartConfig.theme = 'Light'
  //     chartConfig.toolbarBg = '#0f172a'
  //   }
  // } else {
  //   // Default (when Media-Queries are not supported)
  // }

  const widgetOptions: any = {
    symbol: 'btcusdt',
    datafeed: datafeed,
    interval: chartConfig.interval,
    timezone: 'Asia/Ho_Chi_Minh',
    container_id: 'tranding-chart',
    library_path: chartConfig.libraryPath,
    locale: 'en',
    disabled_features: [
      'symbol_search_hot_key',
      'compare_symbol',
      'go_to_date',
      'header_chart_type',
      'header_compare',
      'header_interval_dialog_button',
      'header_screenshot',
      'header_symbol_search',
      'header_undo_redo',
      'legend_context_menu',
      'show_hide_button_in_legend',
      'show_interval_dialog_on_key_press',
      'snapshot_trading_drawings',
      'symbol_info',
      'timeframes_toolbar',
      'volume_force_overlay'
    ],
    theme: chartConfig.theme,
    charts_storage_api_version: chartConfig.chartsStorageApiVersion,
    client_id: chartConfig.clientId,
    user_id: chartConfig.userId,
    fullscreen: chartConfig.fullscreen,
    autosize: chartConfig.autosize,
    toolbar_bg: chartConfig.toolbarBg,
    overrides: {
      'paneProperties.background': chartConfig.toolbarBg,
      'mainSeriesProperties.candleStyle.upColor': '#229E6C',
      'mainSeriesProperties.candleStyle.downColor': '#E43650',
      'mainSeriesProperties.candleStyle.borderUpColor': '#229E6C',
      'mainSeriesProperties.candleStyle.borderDownColor': '#E43650',
      'mainSeriesProperties.candleStyle.wickUpColor': '#229E6C',
      'mainSeriesProperties.candleStyle.wickDownColor': '#E43650'
    },
    studies_overrides: {
      'volume.volume.color.0': '#E43650',
      'volume.volume.color.1': '#229E6C',
      'volume.volume.transparency': 1,
      'volume.show ma': !0,
      'volume.volume ma.plottype': 'line'
    },
    enabled_features: [
      'dont_show_boolean_study_arguments',
      'hide_last_na_study_output',
      'move_logo_to_main_pane',
      'same_data_requery',
      'side_toolbar_in_fullscreen_mode',
      'keep_left_toolbar_visible_on_small_screens',
      'disable_resolution_rebuild',
      'header_saveload',
      'header_saveload_to_the_right'
    ],
    custom_css_url: 'css/custom.css'
  }
  const RESOLUTIONS_FULL = [
    { label: '1m', value: '1' },
    // { label: '5m', value: '5' },
    { label: '15m', value: '15' },
    // { label: '30m', value: '30' },
    { label: '1H', value: '60' },
    { label: '1D', value: '1D' },
    { label: '1W', value: '1W' },
    // { label: '1M', value: '1M' }
  ]
  const [currentResolution, setCurrentResolution] = useState('60')
  const [chartWidget, setChartWiget] = useState<any>()
  const [soketInited, setSocketInited] = useState(false)
  const { createWebsocket, subcribeTransaction } = useSocket()

  const updatePrecision = (_chartWidget: any)  => {
    if(_chartWidget) {
      const _format = `1${'0'.repeat(precision)}`
      _chartWidget?.applyOverrides({ 'mainSeriesProperties.minTick': _format })
    }
  }

  const initChart = useCallback(() => {
    const resolution = localStorage.getItem(config.RESOLUTION_STOGRATE)
    if (resolution) {
      widgetOptions.interval = resolution
    }
    setCurrentResolution(resolution || widgetOptions.interval)

    if(token0?.symbol && token1?.symbol) {
      const token = `${token0?.wrapped.address}_${token1?.wrapped.address}`
      const symbol = `${token0?.symbol}/${token1?.symbol}-${token}`

      // eslint-disable-next-line react-hooks/exhaustive-deps
      // const _chartWidget = new widget({ ...widgetOptions, symbol })
      // setChartWiget(_chartWidget)
      // _chartWidget.onChartReady(() => {
      //   // chartWidget?.activeChart().setChartType(3)
      //   const _resolution = resolution ? resolution : '60'
      //   getCandle(_RESOLUTION[_resolution], token)
      //   subcribeTransaction(`${token0?.wrapped.address.toLocaleLowerCase()}_${token1?.wrapped?.address.toLocaleLowerCase()}`)
      //   //ready
      //   updatePrecision(_chartWidget)
      // })
    }

  }, [token0, token1, precision])

  const setResolution = (resolution: string) => {
    const chart = chartWidget?.chart()
    if(chart) {
      const token = `${token0?.wrapped.address}_${token1?.wrapped.address}`
      chart.setResolution(resolution)
      setCurrentResolution(resolution)
      getCandle(_RESOLUTION[resolution], token)
    }
  }

  const handleExecuteAction = (id: string) => {
    const chart = chartWidget.chart()
    if(chart) {
      chart.executeActionById(id) //'scalesProperties') //'insertIndicator')
    }
  }

  useEffect(() => {
    if(precision) {
      initChart()
    }
  }, [precision, initChart])


  useEffect(() => {
    if(token0?.symbol && token1?.symbol) {
      initChart()
      if(isMounted && !soketInited) {
        createWebsocket()
        setSocketInited(true)
      }
    }
  }, [isMounted, token0, token1, soketInited , initChart, createWebsocket])

  useEffect(() => {
    return () => {
      setSocketInited(false)
    }
  }, [])

  return (
    <div className='h-full'>
      <div className='h-full p-5 flex flex-col border-neubrutal rounded-lg background-card'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center gap-5'>
            <div className='relative w-9 h-9'>
              <span className='absolute background-card top-[-4px] left-[-4px] z-[1] rounded-[50%] shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]'>
                {
                  token0 && <Currency.Icon
                    disableLink
                    currency={token0}
                    width={28}
                    height={28}
                  />
                }
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M12 24.7391C18.6274 24.7391 24 19.3665 24 12.7391C24 6.11166 18.6274 0.739075 12 0.739075C5.37258 0.739075 0 6.11166 0 12.7391C0 19.3665 5.37258 24.7391 12 24.7391Z" fill="#6284F5"/>
                  <path d="M16.8953 13.8425C16.874 13.8411 12.0637 16.6918 12.0007 16.7162C11.9865 16.708 7.13392 13.836 7.11084 13.8389C7.12259 13.8561 11.9974 20.7391 12.0007 20.7391C12.004 20.7391 16.8953 13.8425 16.8953 13.8425Z" fill="white"/>
                  <path d="M12.003 4.73907L7.12671 12.8947L12.003 15.7832L16.8795 12.8947L12.003 4.73907Z" fill="white"/>
                </svg> */}
              </span>
              <span className='absolute background-card bottom-0 right-0 rounded-[50%] shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]'>
                {token1 && 
                  <Currency.Icon
                    disableLink
                    currency={token1}
                    width={28}
                    height={28}
                  />
                }
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.1943 24.7285C18.8218 24.7285 24.1944 19.3558 24.1944 12.7284C24.1944 6.10105 18.8218 0.728455 12.1943 0.728455C5.56692 0.728455 0.194336 6.10105 0.194336 12.7284C0.194336 19.3558 5.56692 24.7285 12.1943 24.7285Z" fill="#1EAA7F"/>
                  <path d="M11.5857 21.602C9.4288 20.3575 7.33108 19.1472 5.18431 17.9086C5.68474 17.7346 5.76386 17.39 5.7621 16.9593C5.75058 14.1371 5.75313 11.315 5.75999 8.49286C5.76096 8.08542 5.70021 7.73747 5.1626 7.57986C6.14325 7.01429 7.04926 6.49183 8.03773 5.92177C8.03773 6.25705 8.03773 6.49298 8.03773 6.7289C8.04011 10.1058 8.04011 13.4872 8.04011 16.8617C8.03641 17.3768 8.17196 17.6452 8.63398 17.9034C9.00721 18.1122 9.06321 18.1314 9.34872 18.2917C9.34872 18.06 9.3503 17.9188 9.34872 17.755C9.34872 13.7225 9.35663 9.74713 9.34872 5.63912C9.34775 5.29768 9.42546 5.08938 9.73936 4.92685C10.348 4.61181 10.9331 4.25118 11.5857 3.87613V21.602Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4015 17.9086L13 21.602V3.87613C13.1944 3.98782 13.3828 4.09824 13.5676 4.20655C14.0033 4.46194 14.419 4.70563 14.8464 4.92685C15.1603 5.08938 15.238 5.29768 15.2371 5.63912C15.2318 8.37848 15.2336 11.0588 15.2353 13.7365C15.2362 15.0743 15.2371 16.4115 15.2371 17.755C15.2361 17.8593 15.2363 17.9544 15.2367 18.0695C15.2369 18.1352 15.2371 18.2075 15.2371 18.2917C15.3725 18.2157 15.4563 18.1714 15.5469 18.1235C15.6471 18.0705 15.7557 18.0131 15.9518 17.9034C16.4138 17.6452 16.5494 17.3768 16.5457 16.8617V16.8576C16.5457 13.4844 16.5457 10.1045 16.5481 6.7289V5.92177L19.4232 7.57986C18.8856 7.73747 18.8248 8.08542 18.8258 8.49286C18.8327 11.315 18.8352 14.1371 18.8237 16.9593C18.8219 17.39 18.901 17.7346 19.4015 17.9086ZM14.3683 5.63517L14.1172 5.12574L13.8662 5.63517L13.3046 5.71683L13.7109 6.11336L13.615 6.67321L14.1172 6.40886L14.6195 6.67321L14.5236 6.11336L14.9299 5.71683L14.3683 5.63517Z" fill="white"/>
                </svg> */}
              </span>
            </div>
            <div className="text-2xl font-bold">{token0?.symbol}/{token1?.symbol}</div>
            <div className='cursor-pointer' onClick={switchTokens}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 25" fill="none">
                <path d="M12.1992 22.7368C6.67622 22.7368 2.19922 18.2598 2.19922 12.7368C2.19922 7.21376 6.67622 2.73676 12.1992 2.73676C17.7222 2.73676 22.1992 7.21376 22.1992 12.7368C22.1992 18.2598 17.7222 22.7368 12.1992 22.7368ZM7.19922 9.73676H9.19922V13.7368H11.1992V9.73676H13.1992L10.1992 6.23676L7.19922 9.73676ZM17.1992 15.7368H15.1992V11.7368H13.1992V15.7368H11.1992L14.1992 19.2368L17.1992 15.7368Z" fill="#8ef102"/>
              </svg>
            </div>
          </div>
          <div className='flex items-center mr-2 gap-3'>
            <div className=' color-base cursor-pointer p-[8px] rounded border-2 border-transparent hover:text-hover transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
                <g clip-path="url(#clip0_70_5252)">
                <path d="M19.2807 19.2492H4.28068C3.61764 19.2492 2.98175 18.9858 2.51291 18.517C2.04407 18.0481 1.78068 17.4122 1.78068 16.7492V1.76919C1.78068 1.54817 1.69288 1.33621 1.5366 1.17993C1.38032 1.02365 1.16836 0.935852 0.947347 0.935852C0.726333 0.935852 0.514372 1.02365 0.358091 1.17993C0.201811 1.33621 0.114014 1.54817 0.114014 1.76919L0.114014 16.7492C0.115337 17.8538 0.554749 18.9129 1.33586 19.694C2.11698 20.4751 3.17602 20.9145 4.28068 20.9159H19.2807C19.5017 20.9159 19.7137 20.8281 19.8699 20.6718C20.0262 20.5155 20.114 20.3035 20.114 20.0825C20.114 19.8615 20.0262 19.6495 19.8699 19.4933C19.7137 19.337 19.5017 19.2492 19.2807 19.2492Z" fill="currentColor"/>
                </g>
                <path d="M5.10195 13.3721C5.32295 13.3721 5.53488 13.2843 5.69112 13.128L8.67945 10.1396C8.83829 9.98833 9.04925 9.90393 9.26862 9.90393C9.48799 9.90393 9.69895 9.98833 9.85779 10.1396L11.6678 11.9496C12.1366 12.4183 12.7724 12.6816 13.4353 12.6816C14.0982 12.6816 14.734 12.4183 15.2028 11.9496L19.8578 7.29465C20.0096 7.13748 20.0936 6.92697 20.0917 6.70848C20.0898 6.48998 20.0021 6.28097 19.8476 6.12646C19.6931 5.97196 19.4841 5.88432 19.2656 5.88242C19.0471 5.88052 18.8366 5.96451 18.6795 6.11631L14.0245 10.7705C13.8682 10.9267 13.6563 11.0145 13.4353 11.0145C13.2143 11.0145 13.0024 10.9267 12.8461 10.7705L11.0361 8.96131C10.5673 8.49263 9.93153 8.22935 9.26862 8.22935C8.60571 8.22935 7.96994 8.49263 7.50112 8.96131L4.51279 11.9496C4.39628 12.0662 4.31694 12.2147 4.2848 12.3763C4.25266 12.5379 4.26916 12.7054 4.33222 12.8577C4.39528 13.0099 4.50206 13.1401 4.63907 13.2316C4.77608 13.3232 4.93716 13.3721 5.10195 13.3721Z" fill="currentColor"/>
                <defs>
                <clipPath id="clip0_70_5252">
                <rect width="20" height="20" fill="white" transform="translate(0.114014 0.935852)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div className='color-base filter-chart-active cursor-pointer p-[8px] rounded border-2 border-transparent hover:text-hover transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
                <g clip-path="url(#clip0_70_5245)">
                <path d="M19.2807 19.2692H2.61401C2.393 19.2692 2.18104 19.1814 2.02476 19.0251C1.86848 18.8688 1.78068 18.6569 1.78068 18.4359V1.76919C1.78068 1.54817 1.69288 1.33621 1.5366 1.17993C1.38032 1.02365 1.16836 0.935852 0.947347 0.935852C0.726333 0.935852 0.514372 1.02365 0.358091 1.17993C0.201811 1.33621 0.114014 1.54817 0.114014 1.76919L0.114014 18.4359C0.114014 19.0989 0.377406 19.7348 0.846247 20.2036C1.31509 20.6725 1.95097 20.9359 2.61401 20.9359H19.2807C19.5017 20.9359 19.7137 20.8481 19.8699 20.6918C20.0262 20.5355 20.114 20.3235 20.114 20.1025C20.114 19.8815 20.0262 19.6695 19.8699 19.5133C19.7137 19.357 19.5017 19.2692 19.2807 19.2692Z" fill="currentColor"/>
                <path d="M12.6141 17.603C12.8351 17.603 13.0471 17.5152 13.2034 17.359C13.3596 17.2027 13.4474 16.9907 13.4474 16.7697V10.9364C13.4474 10.7153 13.3596 10.5034 13.2034 10.3471C13.0471 10.1908 12.8351 10.103 12.6141 10.103C12.3931 10.103 12.1811 10.1908 12.0248 10.3471C11.8686 10.5034 11.7808 10.7153 11.7808 10.9364V16.7697C11.7808 16.9907 11.8686 17.2027 12.0248 17.359C12.1811 17.5152 12.3931 17.603 12.6141 17.603Z" fill="currentColor"/>
                <path d="M5.94735 17.603C6.16836 17.603 6.38032 17.5152 6.5366 17.359C6.69288 17.2027 6.78068 16.9907 6.78068 16.7697V10.9364C6.78068 10.7153 6.69288 10.5034 6.5366 10.3471C6.38032 10.1908 6.16836 10.103 5.94735 10.103C5.72633 10.103 5.51437 10.1908 5.35809 10.3471C5.20181 10.5034 5.11401 10.7153 5.11401 10.9364V16.7697C5.11401 16.9907 5.20181 17.2027 5.35809 17.359C5.51437 17.5152 5.72633 17.603 5.94735 17.603Z" fill="currentColor"/>
                <path d="M15.9474 17.6025C16.1684 17.6025 16.3803 17.5147 16.5366 17.3584C16.6929 17.2022 16.7807 16.9902 16.7807 16.7692V6.76919C16.7807 6.54817 16.6929 6.33621 16.5366 6.17993C16.3803 6.02365 16.1684 5.93585 15.9474 5.93585C15.7263 5.93585 15.5144 6.02365 15.3581 6.17993C15.2018 6.33621 15.114 6.54817 15.114 6.76919V16.7692C15.114 16.9902 15.2018 17.2022 15.3581 17.3584C15.5144 17.5147 15.7263 17.6025 15.9474 17.6025Z" fill="currentColor"/>
                <path d="M9.2806 17.6025C9.50162 17.6025 9.71358 17.5147 9.86986 17.3584C10.0261 17.2022 10.1139 16.9902 10.1139 16.7692V6.76919C10.1139 6.54817 10.0261 6.33621 9.86986 6.17993C9.71358 6.02365 9.50162 5.93585 9.2806 5.93585C9.05959 5.93585 8.84763 6.02365 8.69134 6.17993C8.53506 6.33621 8.44727 6.54817 8.44727 6.76919V16.7692C8.44727 16.9902 8.53506 17.2022 8.69134 17.3584C8.84763 17.5147 9.05959 17.6025 9.2806 17.6025Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_70_5245">
                <rect width="20" height="20" fill="white" transform="translate(0.114014 0.935852)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center'>
     
            {/* <div className='text-5xl font-semibold'>2023.122455</div>
            <span className='color-green text-xl'>(+82.42%)</span> */}
          </div>
          <div className='flex items-center'>
            {
              RESOLUTIONS_FULL.map((item, index) => (
                <div onClick={ () => {setResolution(item.value)} } key={index} className={`color-base font-bold cursor-pointer px-5 py-1 rounded-lg border-2 border-transparent hover:text-hover transition-all ${item.value === currentResolution ? 'filter-chart-active' : ''}`}>{item.label}</div>
              ))
            }
            {/* <div className='color-base font-bold cursor-pointer px-5 py-1 rounded-lg border-2 border-transparent hover:text-hover transition-all'>7D</div>
            <div className='filter-chart-active color-base font-bold cursor-pointer px-5 py-1 rounded-lg border-2 border-transparent hover:text-hover transition-all'>30D</div>
            <div className='color-base font-bold cursor-pointer px-5 py-1 rounded-lg border-2 border-transparent hover:text-hover transition-all'>1Y</div> */}
             <Button
              size="sm"
              className="!rounded-full hover:!text-hover focus:!text-hover hover:border-hover focus:border-hover color-base dark:bg-transparent bg-transparent border-color-base border-2 w-9 h-9 px-[0px] mr-7"
              variant="secondary"
              onClick={()=> handleExecuteAction('chartProperties')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_70_5265)">
                <path d="M10.0001 6.59912C9.36715 6.59912 8.74846 6.7868 8.22223 7.13842C7.69599 7.49004 7.28584 7.98981 7.04364 8.57453C6.80144 9.15926 6.73806 9.80267 6.86154 10.4234C6.98501 11.0441 7.28978 11.6143 7.73731 12.0619C8.18484 12.5094 8.75502 12.8142 9.37576 12.9376C9.9965 13.0611 10.6399 12.9977 11.2246 12.7555C11.8094 12.5133 12.3091 12.1032 12.6608 11.5769C13.0124 11.0507 13.2001 10.432 13.2001 9.79912C13.2001 8.95043 12.8629 8.1365 12.2628 7.53638C11.6627 6.93626 10.8487 6.59912 10.0001 6.59912ZM10.0001 11.3991C9.6836 11.3991 9.37426 11.3053 9.11114 11.1295C8.84802 10.9537 8.64294 10.7038 8.52184 10.4114C8.40074 10.1191 8.36906 9.79735 8.43079 9.48698C8.49253 9.17661 8.64492 8.89151 8.86868 8.66775C9.09244 8.44399 9.37754 8.2916 9.68791 8.22986C9.99828 8.16813 10.32 8.19981 10.6123 8.32091C10.9047 8.44201 11.1546 8.64709 11.3304 8.91021C11.5062 9.17333 11.6001 9.48267 11.6001 9.79912C11.6001 10.2235 11.4315 10.6304 11.1314 10.9305C10.8314 11.2306 10.4244 11.3991 10.0001 11.3991Z" fill="currentColor"/>
                <path d="M17.4352 11.3186L17.08 11.1138C17.2399 10.2438 17.2399 9.35186 17.08 8.48181L17.4352 8.27701C17.7084 8.11942 17.9478 7.90958 18.1399 7.65946C18.3319 7.40934 18.4728 7.12384 18.5545 6.81926C18.6362 6.51469 18.6572 6.197 18.6161 5.88433C18.575 5.57167 18.4728 5.27016 18.3152 4.99701C18.1576 4.72386 17.9478 4.48442 17.6977 4.29237C17.4475 4.10032 17.162 3.95941 16.8575 3.8777C16.5529 3.79598 16.2352 3.77506 15.9225 3.81612C15.6099 3.85718 15.3084 3.95942 15.0352 4.11701L14.6792 4.32261C14.0068 3.74814 13.2341 3.30281 12.4 3.00901V2.59861C12.4 1.96209 12.1472 1.35164 11.6971 0.901552C11.247 0.451465 10.6365 0.198608 10 0.198608C9.36349 0.198608 8.75304 0.451465 8.30295 0.901552C7.85287 1.35164 7.60001 1.96209 7.60001 2.59861V3.00901C6.76592 3.30386 5.99349 3.75029 5.32161 4.32581L4.96401 4.11861C4.41236 3.80035 3.75688 3.71427 3.14176 3.8793C2.52664 4.04433 2.00227 4.44696 1.68401 4.99861C1.36575 5.55026 1.27967 6.20574 1.4447 6.82086C1.60973 7.43598 2.01236 7.96035 2.56401 8.27861L2.91921 8.48341C2.7593 9.35345 2.7593 10.2454 2.91921 11.1154L2.56401 11.3202C2.01236 11.6385 1.60973 12.1628 1.4447 12.778C1.27967 13.3931 1.36575 14.0486 1.68401 14.6002C2.00227 15.1519 2.52664 15.5545 3.14176 15.7195C3.75688 15.8846 4.41236 15.7985 4.96401 15.4802L5.32001 15.2746C5.99262 15.8492 6.76559 16.2945 7.60001 16.5882V16.9986C7.60001 17.6351 7.85287 18.2456 8.30295 18.6957C8.75304 19.1458 9.36349 19.3986 10 19.3986C10.6365 19.3986 11.247 19.1458 11.6971 18.6957C12.1472 18.2456 12.4 17.6351 12.4 16.9986V16.5882C13.2341 16.2934 14.0065 15.8469 14.6784 15.2714L15.036 15.4778C15.5877 15.7961 16.2431 15.8822 16.8583 15.7171C17.4734 15.5521 17.9978 15.1495 18.316 14.5978C18.6343 14.0462 18.7204 13.3907 18.5553 12.7756C18.3903 12.1604 17.9877 11.6361 17.436 11.3178L17.4352 11.3186ZM15.3968 8.29781C15.6677 9.27946 15.6677 10.3162 15.3968 11.2978C15.3495 11.4687 15.3603 11.6504 15.4275 11.8145C15.4947 11.9785 15.6145 12.1156 15.768 12.2042L16.6352 12.705C16.8191 12.8111 16.9532 12.9859 17.0082 13.1909C17.0632 13.3959 17.0345 13.6144 16.9284 13.7982C16.8223 13.9821 16.6475 14.1162 16.4425 14.1712C16.2375 14.2262 16.0191 14.1975 15.8352 14.0914L14.9664 13.589C14.8127 13.5 14.6338 13.4647 14.4578 13.4886C14.2818 13.5125 14.1188 13.5942 13.9944 13.721C13.2823 14.4479 12.3853 14.9666 11.4 15.221C11.228 15.2652 11.0757 15.3654 10.9669 15.5057C10.8581 15.6461 10.7991 15.8186 10.7992 15.9962V16.9986C10.7992 17.2108 10.7149 17.4143 10.5649 17.5643C10.4149 17.7143 10.2114 17.7986 9.99921 17.7986C9.78704 17.7986 9.58355 17.7143 9.43353 17.5643C9.2835 17.4143 9.19921 17.2108 9.19921 16.9986V15.997C9.1993 15.8194 9.14031 15.6469 9.03153 15.5065C8.92276 15.3662 8.77038 15.266 8.59841 15.2218C7.61309 14.9664 6.71627 14.4466 6.00481 13.7186C5.88043 13.5918 5.7174 13.5101 5.54142 13.4862C5.36543 13.4623 5.18649 13.4976 5.03281 13.5866L4.16561 14.0882C4.07459 14.1416 3.97392 14.1764 3.86939 14.1907C3.76486 14.205 3.65853 14.1985 3.55653 14.1715C3.45453 14.1445 3.35888 14.0976 3.27507 14.0336C3.19126 13.9695 3.12095 13.8894 3.0682 13.7981C3.01545 13.7067 2.98129 13.6058 2.96769 13.5012C2.95409 13.3966 2.96132 13.2903 2.98896 13.1885C3.01661 13.0866 3.06411 12.9913 3.12876 12.9079C3.1934 12.8245 3.27389 12.7548 3.36561 12.7026L4.23281 12.2018C4.38637 12.1132 4.50615 11.9761 4.57334 11.8121C4.64053 11.648 4.65131 11.4663 4.60401 11.2954C4.3331 10.3138 4.3331 9.27706 4.60401 8.29541C4.65046 8.12491 4.63916 7.94384 4.57186 7.78044C4.50457 7.61705 4.38506 7.48053 4.23201 7.39221L3.36481 6.89141C3.18096 6.78532 3.04679 6.61055 2.9918 6.40553C2.93682 6.20052 2.96552 5.98206 3.07161 5.79821C3.1777 5.61436 3.35247 5.48019 3.55749 5.4252C3.7625 5.37021 3.98096 5.39892 4.16481 5.50501L5.03361 6.00741C5.18687 6.09662 5.36543 6.13238 5.54123 6.10906C5.71703 6.08575 5.8801 6.00468 6.00481 5.87861C6.71688 5.15168 7.61395 4.63302 8.59921 4.37861C8.77172 4.33426 8.92449 4.23361 9.03332 4.09261C9.14215 3.95161 9.20081 3.77832 9.20001 3.60021V2.59861C9.20001 2.38644 9.2843 2.18295 9.43433 2.03292C9.58435 1.88289 9.78784 1.79861 10 1.79861C10.2122 1.79861 10.4157 1.88289 10.5657 2.03292C10.7157 2.18295 10.8 2.38644 10.8 2.59861V3.60021C10.7999 3.77777 10.8589 3.95032 10.9677 4.09067C11.0765 4.23102 11.2288 4.33119 11.4008 4.37541C12.3864 4.63073 13.2835 5.15052 13.9952 5.87861C14.1196 6.00538 14.2826 6.08716 14.4586 6.11106C14.6346 6.13496 14.8135 6.09962 14.9672 6.01061L15.8344 5.50901C15.9254 5.45565 16.0261 5.42082 16.1306 5.40653C16.2352 5.39224 16.3415 5.39876 16.4435 5.42573C16.5455 5.4527 16.6411 5.49957 16.725 5.56366C16.8088 5.62775 16.8791 5.70778 16.9318 5.79915C16.9846 5.89051 17.0187 5.99142 17.0323 6.09604C17.0459 6.20066 17.0387 6.30694 17.0111 6.40876C16.9834 6.51058 16.9359 6.60593 16.8713 6.68931C16.8066 6.77269 16.7261 6.84246 16.6344 6.89461L15.7672 7.39541C15.6144 7.48397 15.4953 7.62059 15.4283 7.78396C15.3613 7.94734 15.3502 8.12829 15.3968 8.29861V8.29781Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_70_5265">
                <rect width="19.2" height="19.2" fill="white" transform="translate(0.400024 0.198608)"/>
                </clipPath>
                </defs>
              </svg>
            </Button>
          </div>
        </div>
      
        {/* <div id="tranding-chart" className='h-full'></div> */}
        <SimpleSwapLineChart/>
      </div>
    </div>
  )

}
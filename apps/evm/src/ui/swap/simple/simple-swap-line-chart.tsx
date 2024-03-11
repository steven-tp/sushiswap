import { FC, useCallback, useMemo } from "react"
import ReactECharts from 'echarts-for-react'
import { EChartsOption } from 'echarts-for-react/lib/types'
import { SkeletonBox, classNames } from "@sushiswap/ui"
import { format } from 'date-fns'
import { formatUSD } from 'sushi/format'
import { graphic } from 'echarts'
import tailwindConfig from 'tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'
const tailwind = resolveConfig(tailwindConfig)
enum LineChartPeriod {
  Day = 0,
  Week = 1,
  Month = 2,
  Year = 3,
  All = 4,
}
const chartTimespans: Record<LineChartPeriod, number> = {
  [LineChartPeriod.Day]: 86400 * 1000,
  [LineChartPeriod.Week]: 604800 * 1000,
  [LineChartPeriod.Month]: 2629746 * 1000,
  [LineChartPeriod.Year]: 31556952 * 1000,
  [LineChartPeriod.All]: Infinity,
}
export const SimpleSwapLineChart: FC = () => {
  const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const yData = [820, 932, 901, 934, 1290, 1330, 1320]
  // Transient update for performance
  const onMouseOver = useCallback(
    ({ name, value }: { name: number; value: number }) => {
      const valueNodes = document.getElementsByClassName('hoveredItemValueTVL')
      const nameNodes = document.getElementsByClassName('hoveredItemNameTVL')

      // valueNodes[0].innerHTML = formatUSD(value)
      // nameNodes[0].innerHTML = format(
      //   new Date(name * 1000),
      //   'dd MMM yyyy HH:mm',
      // )
    },
    [],
  )
  const DEFAULT_OPTION: EChartsOption = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        extraCssText: 'z-index: 1000',
        responsive: true,
        // @ts-ignore
        backgroundColor: '#fff',
        textStyle: {
          // @ts-ignore
          color: tailwind.theme.colors.slate['50'],
          fontSize: 12,
          fontWeight: 600,
        },
        formatter: (params: any) => {
          onMouseOver({ name: params[0].name, value: params[0].value })

          const date = new Date(Number(params[0].name * 1000))
          return `<div class="flex flex-col gap-0.5">
            <span class="text-sm text-slate-50 font-bold">${formatUSD(
              params[0].value,
            )}</span>
            <span class="text-xs text-slate-400 font-medium">${
              date instanceof Date && !Number.isNaN(date?.getTime())
                ? format(date, 'dd MMM yyyy HH:mm')
                : ''
            }</span>
          </div>`
        },
        borderWidth: 0,
      },
      toolbox: {
        show: true,
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      visualMap: {
        show: false,
        // @ts-ignore
        color: [tailwind.theme.colors.primary],
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          boundaryGap: true,
          data: xData,
        },
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          scale: true,
          name: 'Volume',
          max: 'dataMax',
          min: 'dataMin',
        },
      ],
      series: [
        {
          name: 'Volume',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            color: 'blue',
            normal: {
              barBorderRadius: 2,
            },
          },
          areaStyle: {
            // @ts-ignore
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(142, 241, 2, 1)'
              },
              {
                offset: 1,
                color: 'rgba(142, 241, 2, 0)'
              }])
  ,
          },
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx: number) {
            return idx * 2
          },
          data: yData,
        },
      ],
    }),
    [onMouseOver, xData, yData],
  )
  return (
    <div className="h-[100%] pb-2">
        {xData ? (
          <ReactECharts option={DEFAULT_OPTION} style={{ height: '100%' }} />
        ) : (
          <SkeletonBox
            className={classNames(
              'h-[400px] w-full dark:via-slate-800 dark:to-slate-900',
            )}
          />
        )}
    </div>
  )
}
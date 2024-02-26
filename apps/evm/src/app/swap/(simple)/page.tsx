import { Container } from '@sushiswap/ui'
import { SimpleSwapWidget } from 'src/ui/swap/simple/simple-swap-widget'
import { SimpleSwapChartContainer } from 'src/ui/swap/simple/simple-swap-chart-container'
import { Providers } from './providers'
import { SimpleSwapInfomation } from 'src/ui/swap/simple/simple-swap-infomation'

export const metadata = {
  title: 'U2USwap',
}

export default function SwapSimplePage() {
  return (
    <Providers>
        <div className='grid p-2 lg:grid-cols-3 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1'>
          <div className="lg:col-span-2 sm:col-span-1">
            <SimpleSwapChartContainer/>
          </div>
          <div>
            <SimpleSwapWidget/>
          </div>
        </div>
        <div>
          <SimpleSwapInfomation/>
        </div>
    </Providers>
  )
}

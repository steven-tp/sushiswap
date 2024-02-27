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
      <Container maxWidth="screen-3xl" className='px-4 lg:px-0'>
        <div className='block lg:grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1 gap-10'>
        <div className='lg:order-2 mb-10 lg:mb-0'>
            <SimpleSwapWidget/>
          </div>
          <div className="lg:col-span-2 sm:col-span-1 lg:order-1">
            <div className='h-[420px] lg:h-[600px]'>
              <SimpleSwapChartContainer/>
            </div>
            <div className='pt-10 lg:pt-14'>
              <SimpleSwapInfomation/>
            </div>
          </div>
        </div>
      </Container>
    </Providers>
  )
}

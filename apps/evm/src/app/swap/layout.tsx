import { HotJar } from '@sushiswap/ui/components/scripts'

import { Header } from './header'
import { Providers } from './providers'

export const metadata = {
  title: 'U2U Swap',
  description:
    'U2U Swap is a community-driven decentralized exchange (DEX) for traders and liquidity providers.',
}

export default function SwapLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <Header />
        <div className="lg:p-4 mt-16 mb-[86px]">{children}</div>
      </Providers>
      <HotJar />
    </>
  )
}

// import { HotJar } from '@sushiswap/ui/components/scripts'

import { Header } from './header'
import { Providers } from './providers'

export const metadata = {
  title: 'U2DEX',
  description:
    'U2DEX is a community-driven decentralized exchange (DEX) for traders and liquidity providers.',
}

export default function SwapLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <Header />
        <div className="pt-10 pb-10">{children}</div>
      </Providers>
      {/* <HotJar /> */}
    </>
  )
}

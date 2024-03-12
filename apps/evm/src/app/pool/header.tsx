'use client'

import { Container, Navigation } from '@sushiswap/ui'
import { WagmiHeaderComponents } from '@sushiswap/wagmi/components'
import React, { FC } from 'react'
import { SUPPORTED_CHAIN_IDS } from 'src/config'

export const Header: FC = () => {
  return (
    <Container maxWidth="7xl" className="mx-auto">
      <Navigation
        rightElement={<WagmiHeaderComponents chainIds={SUPPORTED_CHAIN_IDS} />}
      />
  </Container>
  )
}

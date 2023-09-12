import { CardDescription, CardHeader, CardTitle, Container, LinkInternal } from '@sushiswap/ui'
import React from 'react'

export default async function Layout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  return (
    <div className="flex flex-col gap-4">
      <Container maxWidth="5xl" className="px-2 sm:px-4">
        <LinkInternal href={`/pool/${params.id}/smart`} className="text-blue hover:underline text-sm">
          ← Back
        </LinkInternal>
        <CardHeader className="!px-0 text-center">
          <CardTitle>Smart Pools.</CardTitle>
          <CardDescription>
            Smart pools optimize liquidity allocation within custom price ranges, enhancing trading efficiency by
            providing deeper liquidity around the current price, increasing LPs{"'"} fee earnings while allowing the
            market to determine the distribution of rational LPs{"'"} positions.
          </CardDescription>
        </CardHeader>
      </Container>
      <Container maxWidth="screen-3xl" className="px-2 sm:px-4">
        {children}
      </Container>
    </div>
  )
}

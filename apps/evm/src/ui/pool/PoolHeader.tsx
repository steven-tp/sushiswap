'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Pool as PoolV2 } from '@sushiswap/client'
import {
  Button,
  Currency,
  LinkExternal,
  LinkInternal,
  classNames,
  typographyVariants,
} from '@sushiswap/ui'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@sushiswap/ui/components/tooltip'
import { SushiSwapV3Pool } from '@sushiswap/v3-sdk'
import React, { FC, useMemo } from 'react'
import { unwrapToken } from 'src/lib/functions'
import { Chain } from 'sushi/chain'
import { Token } from 'sushi/currency'
import { formatPercent, shortenAddress } from 'sushi/format'

import { APRHoverCard } from './APRHoverCard'

type PoolHeader = {
  backUrl: string
  address: string
  pool: SushiSwapV3Pool | null | undefined | PoolV2
  apy?: {
    fees: number | undefined
    rewards: number | undefined
    vault?: number
  }
  priceRange?: string
  hasEnabledStrategies?: boolean
}

export const PoolHeader: FC<PoolHeader> = ({
  backUrl,
  address,
  pool,
  apy,
  priceRange,
}) => {
  const [token0, token1] = useMemo(() => {
    if (!pool) return [undefined, undefined]
    if (pool instanceof SushiSwapV3Pool) {
      return [unwrapToken(pool.token0), unwrapToken(pool.token1)]
    }

    return [
      unwrapToken(
        new Token({
          chainId: pool.chainId,
          address: pool.token0.address,
          decimals: pool.token0.decimals,
          symbol: pool.token0.symbol,
        }),
      ),
      unwrapToken(
        new Token({
          chainId: pool.chainId,
          address: pool.token1.address,
          decimals: pool.token1.decimals,
          symbol: pool.token1.symbol,
        }),
      ),
    ]
  }, [pool])

  if (pool && token0 && token1)
    return (
      <div className="flex flex-col gap-6 border-neubrutal rounded-lg px-10 py-5">
        <div className="flex flex-col gap-4">
          <LinkInternal
            href={backUrl}
            className="flex items-center gap-0.5 leading-none text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary font-black text-base font-display"
          >
            <div className='text-neutral-600 dark:text-[#98a2b3]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M4.15278 8.53175C4.15603 8.88248 4.29735 9.21781 4.54612 9.46508L7.40612 12.3317C7.53103 12.4559 7.69999 12.5256 7.87612 12.5256C8.05224 12.5256 8.22121 12.4559 8.34612 12.3317C8.4086 12.2698 8.4582 12.196 8.49204 12.1148C8.52589 12.0336 8.54332 11.9464 8.54332 11.8584C8.54332 11.7704 8.52589 11.6833 8.49204 11.602C8.4582 11.5208 8.4086 11.4471 8.34612 11.3851L6.15278 9.19841H12.8195C12.9963 9.19841 13.1658 9.12818 13.2909 9.00315C13.4159 8.87813 13.4861 8.70856 13.4861 8.53175C13.4861 8.35494 13.4159 8.18537 13.2909 8.06034C13.1658 7.93532 12.9963 7.86508 12.8195 7.86508H6.15278L8.34612 5.67175C8.47165 5.5471 8.54253 5.37768 8.54315 5.20077C8.54378 5.02387 8.4741 4.85395 8.34945 4.72842C8.2248 4.60288 8.05538 4.532 7.87847 4.53138C7.70156 4.53075 7.53165 4.60043 7.40612 4.72508L4.54612 7.59175C4.29572 7.84065 4.15427 8.1787 4.15278 8.53175Z" fill="currentColor"/>
              </svg>
            </div>
            Pools
          </LinkInternal>
          <div className="relative flex items-center gap-3 max-w-[100vh]">
            <Currency.IconList iconWidth={36} iconHeight={36}>
              <Currency.Icon currency={token0} />
              <Currency.Icon currency={token1} />
            </Currency.IconList>
            <Button
              asChild
              variant="link"
              className={typographyVariants({
                variant: 'h1',
                className:
                  'sm:!text2-xl sm:!text-4xl !font-bold text-gray-900 dark:text-slate-50 truncate overflow-x-auto',
              })}
            >
              <LinkExternal
                href={Chain.from(pool.chainId)?.getTokenUrl(address)}
              >
                {token0.symbol}/{token1.symbol}
              </LinkExternal>
            </Button>
            {pool instanceof SushiSwapV3Pool ? null : (
              <div
                className={classNames(
                  pool.protocol === 'SUSHISWAP_V3'
                    ? 'bg-blue/20 text-blue'
                    : pool.protocol === 'SUSHISWAP_V2'
                    ? 'bg-pink/20 text-pink'
                    : 'bg-green/20 text-green',
                  'text-sm px-2 py-1 font-semibold rounded-full mt-0.5',
                )}
              >
                {pool.protocol === 'SUSHISWAP_V3'
                  ? 'V3'
                  : pool.protocol === 'SUSHISWAP_V2'
                  ? 'V2'
                  : pool.protocol === 'BENTOBOX_CLASSIC'
                  ? 'Classic'
                  : 'Stable'}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-y-5 gap-x-[32px] text-secondary-foreground mt-1.5">
          {apy ? (
            <div className="flex items-center gap-1.5">
              <span className="tracking-tighter font-semibold">APR</span>
              {pool instanceof SushiSwapV3Pool ? (
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dotted underline-offset-2">
                        {formatPercent((apy.fees || 0) + (apy.rewards || 0))}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      The APR displayed is algorithmic and subject to change.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <APRHoverCard pool={pool} smartPoolAPR={apy.vault}>
                  <span className="underline decoration-dotted underline-offset-2">
                    {formatPercent(
                      ((typeof apy.vault === 'number' ? apy.vault : apy.fees) ||
                        0) + (apy.rewards || 0),
                    )}
                  </span>
                </APRHoverCard>
              )}
            </div>
          ) : null}
          {priceRange ? (
            <div className="flex items-center gap-1.5">
              <span className="tracking-tighter font-semibold">
                Price Range
              </span>
              {priceRange}
            </div>
          ) : null}
          <div className="flex items-center gap-1.5">
            <span className="tracking-tighter font-semibold">Fee</span>
            {pool instanceof SushiSwapV3Pool
              ? pool.fee / 10000
              : pool.swapFee * 100}
            %
          </div>
          <div className="flex items-center gap-1.5">
            <span className="tracking-tighter font-semibold">Network</span>
            {Chain.from(pool.chainId)?.name}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="tracking-tighter font-semibold">
              {token0.symbol}
            </span>
            <LinkExternal
              href={Chain.from(pool.chainId)?.getTokenUrl(
                token0.wrapped.address,
              )}
            >
              <Button
                asChild
                variant="link"
                size="sm"
                className="!font-medium !text-secondary-foreground"
              >
                {shortenAddress(token0.wrapped.address, 4)}
                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
              </Button>
            </LinkExternal>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="tracking-tighter font-semibold">
              {token1.symbol}
            </span>
            <LinkExternal
              target="_blank"
              href={Chain.from(pool.chainId)?.getTokenUrl(
                token1.wrapped.address,
              )}
            >
              <Button
                asChild
                variant="link"
                size="sm"
                className="!font-medium !text-secondary-foreground"
              >
                {shortenAddress(token1.wrapped.address, 4)}
                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
              </Button>
            </LinkExternal>
          </div>
        </div>
      </div>
    )

  return <></>
}

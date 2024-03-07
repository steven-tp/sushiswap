'use client'

import { PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  Chip,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import {
  Command,
  CommandGroup,
  CommandItem,
} from '@sushiswap/ui/components/command'
import { CheckIcon, NetworkIcon } from '@sushiswap/ui/components/icons'
import React, { FC, useCallback, useState, useTransition } from 'react'
import { SUPPORTED_CHAIN_IDS } from 'src/config'
import { Chain, ChainId } from 'sushi/chain'

import { usePoolFilters, useSetPoolFilters } from './PoolsFiltersProvider'

const isAllThenNone = (chainIds: number[]) =>
  SUPPORTED_CHAIN_IDS.length === chainIds.length ? [] : chainIds

export const TableFiltersNetwork: FC = () => {
  const [pending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const { chainIds } = usePoolFilters()
  const setFilters = useSetPoolFilters()
  const [localValue, setValues] = useState<number[]>(isAllThenNone(chainIds))

  const values = pending ? localValue : isAllThenNone(chainIds)

  const onClick = useCallback(
    (chainId: ChainId) => {
      let _newValues: number[]
      if (localValue.includes(chainId)) {
        _newValues = localValue.filter((el) => el !== chainId)
      } else {
        _newValues = [...(localValue ?? []), chainId]
      }
      setValues(_newValues)

      startTransition(() => {
        setFilters((prev) => {
          if (prev.chainIds?.includes(chainId)) {
            const chains = prev.chainIds.filter((el) => el !== chainId)
            return { ...prev, chainIds: chains }
          } else {
            return { ...prev, chainIds: [...(prev.chainIds ?? []), chainId] }
          }
        })
      })
    },
    [setFilters, localValue],
  )

  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="border"
          role="combobox"
          aria-expanded={open}
          className='hover:bg-muted data-[state=open]:bg-accent data-[state=open]:shadow-[0_4px_0_0_rgba(0,0,0,1)] !text-base'
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <g clip-path="url(#clip0_70_5550)">
              <path d="M20.2474 12.587C19.6339 12.5868 19.0286 12.7281 18.4785 12.9996C17.9284 13.2712 17.4483 13.6659 17.0754 14.153L17.0054 14.123C17.2804 13.271 17.3216 12.3608 17.1247 11.4874C16.9278 10.6141 16.5001 9.80959 15.8861 9.15802C15.2721 8.50644 14.4945 8.03167 13.6343 7.78328C12.7742 7.53489 11.8632 7.522 10.9964 7.74596L10.9054 7.57396C11.6317 6.92768 12.0975 6.03869 12.2154 5.0736C12.3332 4.10851 12.0951 3.13356 11.5456 2.33146C10.9961 1.52937 10.173 0.955189 9.23047 0.716531C8.28795 0.477874 7.29075 0.591119 6.42575 1.03505C5.56075 1.47897 4.88733 2.22311 4.53169 3.12799C4.17605 4.03288 4.1626 5.0364 4.49387 5.95048C4.82514 6.86457 5.47839 7.62648 6.33118 8.09342C7.18398 8.56036 8.17779 8.70028 9.12636 8.48696L9.19936 8.62396C8.19942 9.39129 7.52675 10.5085 7.31641 11.7512C7.10607 12.994 7.37363 14.2703 8.06536 15.324L6.18036 17.087C5.32833 16.6162 4.33388 16.4723 3.38335 16.6822C2.43283 16.8922 1.59148 17.4415 1.01696 18.2273C0.44244 19.0131 0.174184 19.9815 0.262461 20.9509C0.350738 21.9203 0.789489 22.8242 1.4965 23.4934C2.2035 24.1625 3.13024 24.5508 4.10305 24.5856C5.07585 24.6204 6.02796 24.2992 6.78095 23.6823C7.53394 23.0654 8.03613 22.1951 8.19342 21.2345C8.35071 20.2738 8.15229 19.2888 7.63536 18.464L9.47336 16.746C10.4828 17.4207 11.7036 17.7044 12.9072 17.5441C14.1108 17.3838 15.2147 16.7904 16.0124 15.875L16.2914 15.994C16.1703 16.8014 16.2993 17.6266 16.6609 18.3586C17.0225 19.0906 17.5995 19.6945 18.3143 20.089C19.0292 20.4835 19.8476 20.6498 20.6598 20.5656C21.4719 20.4814 22.2388 20.1507 22.8575 19.6179C23.4761 19.0851 23.9169 18.3757 24.1206 17.585C24.3244 16.7944 24.2813 15.9603 23.9971 15.1949C23.713 14.4294 23.2014 13.7693 22.5311 13.3031C21.8608 12.8369 21.0638 12.587 20.2474 12.587ZM6.24736 4.58696C6.24736 4.1914 6.36466 3.80472 6.58442 3.47582C6.80419 3.14692 7.11654 2.89058 7.482 2.7392C7.84745 2.58783 8.24958 2.54822 8.63754 2.62539C9.02551 2.70256 9.38187 2.89304 9.66158 3.17275C9.94128 3.45245 10.1318 3.80882 10.2089 4.19678C10.2861 4.58474 10.2465 4.98687 10.0951 5.35233C9.94375 5.71778 9.6874 6.03014 9.3585 6.2499C9.02961 6.46966 8.64293 6.58696 8.24736 6.58696C7.71693 6.58696 7.20822 6.37625 6.83315 6.00117C6.45808 5.6261 6.24736 5.11739 6.24736 4.58696ZM4.24736 22.587C3.8518 22.587 3.46512 22.4697 3.13622 22.2499C2.80732 22.0301 2.55098 21.7178 2.3996 21.3523C2.24823 20.9869 2.20862 20.5847 2.28579 20.1968C2.36296 19.8088 2.55344 19.4525 2.83315 19.1727C3.11285 18.893 3.46922 18.7026 3.85718 18.6254C4.24514 18.5482 4.64728 18.5878 5.01273 18.7392C5.37818 18.8906 5.69054 19.1469 5.9103 19.4758C6.13007 19.8047 6.24736 20.1914 6.24736 20.587C6.24736 21.1174 6.03665 21.6261 5.66158 22.0012C5.2865 22.3762 4.7778 22.587 4.24736 22.587ZM12.2474 15.587C11.5981 15.5857 10.9667 15.3738 10.4481 14.9831C9.92946 14.5924 9.55161 14.044 9.37127 13.4202C9.19093 12.7964 9.21782 12.131 9.44793 11.5238C9.67803 10.9167 10.0989 10.4005 10.6474 10.053L11.0544 9.83596C11.4633 9.65807 11.9068 9.57359 12.3525 9.58868C12.7982 9.60377 13.235 9.71804 13.631 9.92318C14.027 10.1283 14.3722 10.4192 14.6417 10.7746C14.9111 11.1299 15.0979 11.5409 15.1885 11.9776C15.2791 12.4143 15.2712 12.8657 15.1653 13.2989C15.0595 13.7321 14.8584 14.1363 14.5767 14.482C14.295 14.8278 13.9397 15.1063 13.5368 15.2975C13.1338 15.4886 12.6933 15.5875 12.2474 15.587ZM20.2474 18.587C19.8518 18.587 19.4651 18.4697 19.1362 18.2499C18.8073 18.0301 18.551 17.7178 18.3996 17.3523C18.2482 16.9869 18.2086 16.5847 18.2858 16.1968C18.363 15.8088 18.5534 15.4525 18.8332 15.1727C19.1129 14.893 19.4692 14.7026 19.8572 14.6254C20.2451 14.5482 20.6473 14.5878 21.0127 14.7392C21.3782 14.8906 21.6905 15.1469 21.9103 15.4758C22.1301 15.8047 22.2474 16.1914 22.2474 16.587C22.2474 17.1174 22.0367 17.6261 21.6616 18.0012C21.2865 18.3762 20.7778 18.587 20.2474 18.587Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_70_5550">
              <rect width="24" height="24" fill="white" transform="translate(0.247681 0.587097)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <span>Networks</span>
          {values?.length > 0 && (
            <>
              <Separator orientation="vertical" className="m-1 !h-4 bg-gray-900/30" />
              <Chip variant="secondary" className="lg:hidden">
                {values.length}
              </Chip>
              <div className="hidden lg:flex gap-1">
                {values.length > 2 ? (
                  <Chip variant="secondary">{values.length} selected</Chip>
                ) : (
                  SUPPORTED_CHAIN_IDS.filter((option) =>
                    values.includes(option),
                  ).map((option) => (
                    <Chip variant="secondary" key={option}>
                      {Chain.from(option)?.name}
                    </Chip>
                  ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="!p-0 !overflow-x-hidden !overflow-y-scroll scroll"
      >
        <Command className="flex items-center gap-1">
          <CommandGroup>
            {SUPPORTED_CHAIN_IDS.map((chainId) => (
              <CommandItem
                key={chainId}
                value={`${chainId}`}
                onSelect={(currentValue) => onClick(+currentValue as ChainId)}
                className="py-2 pl-8 pr-2"
              >
                {values.includes(chainId) ? (
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <CheckIcon
                      strokeWidth={3}
                      width={16}
                      height={16}
                      className="text-primary"
                    />
                  </span>
                ) : null}
                <NetworkIcon
                  chainId={chainId}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {Chain.from(chainId)?.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

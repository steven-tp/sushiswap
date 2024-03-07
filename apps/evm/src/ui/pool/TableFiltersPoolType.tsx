'use client'

import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Protocol } from '@sushiswap/client'
import { useMutationObserver } from '@sushiswap/hooks'
import {
  Chip,
  CommandList,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Label,
  Popover,
  PopoverContent,
  PopoverPrimitive,
  PopoverTrigger,
  Separator,
} from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import {
  Command,
  CommandGroup,
  CommandItem,
} from '@sushiswap/ui/components/command'
import { CheckIcon } from '@sushiswap/ui/components/icons'
import React, { FC, useCallback, useState, useTransition } from 'react'

import { PROTOCOL_MAP } from '../../lib/constants'
import { usePoolFilters, useSetPoolFilters } from './PoolsFiltersProvider'

export const POOL_TYPES = [
  Protocol.SUSHISWAP_V3,
  // Protocol.SUSHISWAP_V2,
  Protocol.BENTOBOX_STABLE,
  Protocol.BENTOBOX_CLASSIC,
]

const POOL_DESCRIPTIONS = {
  [Protocol.SUSHISWAP_V3]:
    'A pool type known as concentrated liquidity, which maximizes capital efficiency by providing the liquidity in a pre-defined range around the current price of the pair. If a user’s position moves out of range, it will not be capturing fees and will need to adjust their range or wait for the price to return to it.',
  [Protocol.SUSHISWAP_V2]:
    'The traditional pool type with a fixed fee of .30% that utilizes a constant product formula to ensure a 50/50 composition of each asset in the pool.',
  [Protocol.BENTOBOX_STABLE]:
    'A customizable pool type with a user-defined fee tier that is best suited for like-kind assets (eg. stablecoin pairs, ETH/stETH) that efficiently captures fees and utilizes a constant product formula to ensure a 50/50 composition of each asset in the pool.',
  [Protocol.BENTOBOX_CLASSIC]:
    'A customizable pool type with a user-defined fee tier that utilizes a constant product formula to ensure a 50/50 composition of each asset in the pool.',
}

const isAllThenNone = (protocols: Protocol[]) =>
  protocols.length === POOL_TYPES.length ? [] : protocols

export const TableFiltersPoolType: FC = () => {
  const [pending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const { protocols } = usePoolFilters()
  const setFilters = useSetPoolFilters()
  const [peekedProtocol, setPeekedProtocol] = React.useState<Protocol>(
    POOL_TYPES[0],
  )
  const [localValue, setValues] = useState<Protocol[]>(isAllThenNone(protocols))

  const values = pending ? localValue : isAllThenNone(protocols)

  const protocolHandler = useCallback(
    (item: Protocol) => {
      let _newValues: Protocol[]
      if (values?.includes(item)) {
        _newValues = values.filter((el) => el !== item)
      } else {
        _newValues = [...(values ?? []), item]
      }
      setValues(_newValues)

      startTransition(() => {
        setFilters((prev) => {
          if (prev.protocols?.includes(item)) {
            const protocols = prev.protocols.filter((el) => el !== item)
            return { ...prev, protocols }
          } else {
            return { ...prev, protocols: [...(prev.protocols ?? []), item] }
          }
        })
      })
    },
    [setFilters, values],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Select a protocol"
          variant="border"
          role="combobox"
          aria-expanded={open}
          className='hover:bg-muted dark:hover:text-white data-[state=open]:bg-accent dark:data-[state=open]:bg-slate-700 data-[state=open]:shadow-[0_4px_0_0_rgba(0,0,0,1)] !text-base'
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
              <g clip-path="url(#clip0_70_5543)">
              <path d="M6.47742 2.68477L6.47771 2.68528L10.647 9.99652C10.6471 9.99679 10.6473 9.99706 10.6474 9.99733C10.7028 10.0935 10.7316 10.2027 10.7309 10.3136C10.7301 10.4249 10.6996 10.534 10.6426 10.6295C10.5856 10.7251 10.5041 10.8037 10.4065 10.8572C10.3101 10.9101 10.2016 10.9366 10.0917 10.9341H1.776H1.77554V10.6841C1.70959 10.6844 1.64473 10.6673 1.58752 10.6344L6.47742 2.68477ZM6.47742 2.68477C6.42269 2.58932 6.34373 2.51002 6.24853 2.45486C6.15333 2.39971 6.04525 2.37067 5.93523 2.37067C5.8252 2.37067 5.71713 2.39971 5.62193 2.45486C5.52673 2.51002 5.44777 2.58932 5.39304 2.68477L5.39263 2.6855L1.23279 9.99663L6.47742 2.68477ZM9.02011 9.68413H2.84802L5.93077 4.25269L9.02011 9.68413Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
              <path d="M14.981 10.6525H19.481C19.9451 10.6525 20.3902 10.4681 20.7184 10.1399C21.0466 9.81171 21.231 9.36659 21.231 8.90247V4.40247C21.231 3.93834 21.0466 3.49322 20.7184 3.16503C20.3902 2.83684 19.9451 2.65247 19.481 2.65247H14.981C14.5168 2.65247 14.0717 2.83684 13.7435 3.16503C13.4153 3.49322 13.231 3.93834 13.231 4.40247V8.90247C13.231 9.36659 13.4153 9.81171 13.7435 10.1399C14.0717 10.4681 14.5168 10.6525 14.981 10.6525ZM14.6274 9.25602L14.4577 9.42572L14.6274 9.25602C14.5336 9.16225 14.481 9.03507 14.481 8.90247V4.40247C14.481 4.26986 14.5336 4.14268 14.6274 4.04891C14.7212 3.95514 14.8483 3.90247 14.981 3.90247H19.481C19.6136 3.90247 19.7407 3.95514 19.8345 4.04891C19.9283 4.14268 19.981 4.26986 19.981 4.40247V8.90247C19.981 9.03507 19.9283 9.16225 19.8345 9.25602C19.7407 9.34979 19.6136 9.40247 19.481 9.40247H14.981C14.8483 9.40247 14.7212 9.34979 14.6274 9.25602Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
              <path d="M5.25733 13.7439C4.39203 13.7439 3.54617 14.0005 2.82671 14.4812C2.10724 14.9619 1.54649 15.6452 1.21535 16.4447C0.88422 17.2441 0.79758 18.1237 0.96639 18.9724C1.1352 19.8211 1.55188 20.6006 2.16373 21.2125C2.77559 21.8243 3.55514 22.241 4.40381 22.4098C5.25247 22.5786 6.13214 22.492 6.93157 22.1609C7.73099 21.8297 8.41427 21.269 8.89501 20.5495C9.37574 19.8301 9.63233 18.9842 9.63233 18.1189C9.63233 17.5444 9.51916 16.9755 9.2993 16.4447C9.07943 15.9139 8.75717 15.4316 8.35092 15.0253C7.94466 14.619 7.46237 14.2968 6.93157 14.0769C6.40077 13.8571 5.83186 13.7439 5.25733 13.7439ZM5.25733 21.2439C4.63926 21.2439 4.03507 21.0606 3.52117 20.7172C3.00727 20.3739 2.60673 19.8858 2.3702 19.3148C2.13368 18.7438 2.07179 18.1154 2.19237 17.5092C2.31295 16.903 2.61058 16.3462 3.04762 15.9092C3.48466 15.4721 4.04148 15.1745 4.64767 15.0539C5.25386 14.9334 5.88219 14.9952 6.45321 15.2318C7.02423 15.4683 7.51229 15.8688 7.85567 16.3827C8.19905 16.8966 8.38233 17.5008 8.38233 18.1189C8.38233 18.9477 8.05309 19.7426 7.46703 20.3286C6.88098 20.9147 6.08613 21.2439 5.25733 21.2439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
              <path d="M21.0072 16.9284L21.0065 16.9277L18.0066 13.9277C18.0066 13.9277 18.0065 13.9277 18.0065 13.9277C17.8501 13.7713 17.6644 13.6472 17.4601 13.5625C17.2557 13.4778 17.0366 13.4343 16.8154 13.4343C16.5942 13.4343 16.3751 13.4778 16.1707 13.5625C15.9663 13.6472 15.7806 13.7713 15.6242 13.9277L12.6242 16.9277L12.6238 16.9282C12.309 17.2445 12.1323 17.6726 12.1323 18.1189C12.1323 18.5651 12.309 18.9932 12.6238 19.3096L12.6242 19.31L15.6242 22.31C15.6242 22.31 15.6242 22.31 15.6242 22.31C15.7806 22.4665 15.9663 22.5906 16.1707 22.6752L16.2664 22.4443L16.1707 22.6752C16.3751 22.7599 16.5942 22.8035 16.8154 22.8035C17.0366 22.8035 17.2557 22.7599 17.4601 22.6752L17.3644 22.4443L17.4601 22.6752C17.6644 22.5906 17.8501 22.4665 18.0065 22.31C18.0065 22.31 18.0066 22.31 18.0066 22.31L21.0065 19.31L21.0072 19.3094C21.3214 18.9928 21.4977 18.5649 21.4977 18.1189C21.4977 17.6729 21.3214 17.245 21.0072 16.9284ZM13.5084 18.4277L13.508 18.4273C13.4676 18.3871 13.4356 18.3393 13.4137 18.2867C13.3918 18.2341 13.3806 18.1777 13.3806 18.1208C13.3806 18.0638 13.3918 18.0074 13.4137 17.9548C13.4356 17.9022 13.4676 17.8544 13.508 17.8142L13.5084 17.8138L16.5065 14.8156C16.5898 14.7363 16.7004 14.692 16.8154 14.692C16.9304 14.692 17.041 14.7363 17.1242 14.8156L20.1223 17.8137C20.1223 17.8137 20.1223 17.8138 20.1224 17.8138C20.2037 17.8952 20.2494 18.0056 20.2494 18.1208C20.2494 18.2359 20.2037 18.3463 20.1224 18.4277C20.1223 18.4277 20.1223 18.4278 20.1223 18.4278L17.1229 21.4272C17.1228 21.4273 17.1227 21.4274 17.1226 21.4274C17.0409 21.5085 16.9305 21.554 16.8154 21.554C16.7003 21.554 16.5898 21.5085 16.5081 21.4274C16.508 21.4273 16.5079 21.4272 16.5079 21.4272L13.5084 18.4277Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
              </g>
              <defs>
              <clipPath id="clip0_70_5543">
              <rect width="22.1154" height="23.9328" fill="white" transform="translate(0.132324 0.620667)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <span>Type</span>
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
                  POOL_TYPES.filter((option) => values.includes(option)).map(
                    (option) => (
                      <Chip variant="secondary" key={option}>
                        {PROTOCOL_MAP[option]}
                      </Chip>
                    ),
                  )
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="!w-[unset] !p-0 rounded-lg">
        <HoverCard>
          <PopoverPrimitive.Portal>
            <HoverCardContent
              side="left"
              align="start"
              forceMount
              className="hidden md:block w-[240px]"
            >
              <div className="flex flex-col gap-2">
                <Label>{PROTOCOL_MAP[peekedProtocol]}</Label>
                <div className="text-sm text-muted-foreground">
                  {POOL_DESCRIPTIONS[peekedProtocol]}
                </div>
              </div>
            </HoverCardContent>
          </PopoverPrimitive.Portal>
          <Command className="flex items-center gap-1">
            <CommandList>
              <HoverCardTrigger />
              <CommandGroup>
                {POOL_TYPES.map((el) => (
                  <ProtocolItem
                    selected={values}
                    key={el}
                    protocol={el}
                    onPeek={(protocol) => setPeekedProtocol(protocol)}
                    onSelect={() =>
                      protocolHandler(el.toUpperCase() as Protocol)
                    }
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </HoverCard>
      </PopoverContent>
    </Popover>
  )
}

interface ProtocolItemProps {
  protocol: Protocol
  onSelect: () => void
  selected: Protocol[]
  onPeek: (model: Protocol) => void
}

const ProtocolItem: FC<ProtocolItemProps> = ({
  selected,
  protocol,
  onSelect,
  onPeek,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'aria-selected') {
          onPeek(protocol)
        }
      }
    }
  })

  return (
    <CommandItem
      ref={ref}
      key={protocol}
      value={protocol}
      onSelect={onSelect}
      className="py-2 pl-8 pr-2 cursor-pointer rounded-md"
    >
      {selected.includes(protocol) ? (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <CheckIcon
            strokeWidth={3}
            width={16}
            height={16}
            className="text-primary"
          />
        </span>
      ) : null}
      {PROTOCOL_MAP[protocol]}
    </CommandItem>
  )
}

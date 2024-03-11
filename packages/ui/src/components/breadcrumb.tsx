'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

import classNames from 'classnames'
import { Button } from './button'
import { LinkInternal } from './link'

const Params = () => {
  const searchParams = useSearchParams()!

  return searchParams.toString().length !== 0 ? (
    <div className="px-2 text-gray-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span
                key={key}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {key}
              </span>
              <span>=</span>
              <span
                key={value}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {value}
              </span>
            </span>
          </React.Fragment>
        )
      })}
    </div>
  ) : null
}

export const Breadcrumb = () => {
  const pathname = usePathname()
  const items = pathname.split('/').slice(2)

  return (
    <div className="pt-4 pb-1">
      <div className='flex gap-x-1.5 items-center text-sm rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] w-fit px-2.5 py-2 background-card'>
        <Button
          variant="link"
          size="sm"
          className={classNames(
            '!font-normal hover:underline',
            pathname.split('/').length === 2
              ? 'color-base'
              : '!color-base hover:!text-hover',
          )}
        >
          <LinkInternal href={`/${pathname.split('/')[1]}`}>Home</LinkInternal>
        </Button>

        {pathname ? (
          <>
            <div className='color-base'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none">
                <path d="M12 8.86449C11.9968 8.51376 11.8555 8.17843 11.6067 7.93116L8.74672 5.0645C8.62181 4.94033 8.45284 4.87064 8.27672 4.87064C8.10059 4.87064 7.93162 4.94033 7.80672 5.0645C7.74423 5.12647 7.69463 5.20021 7.66079 5.28145C7.62694 5.36269 7.60952 5.44982 7.60952 5.53783C7.60952 5.62584 7.62694 5.71298 7.66079 5.79421C7.69463 5.87545 7.74423 5.94919 7.80672 6.01116L10 8.19783H3.33338C3.15657 8.19783 2.987 8.26807 2.86198 8.39309C2.73695 8.51811 2.66672 8.68768 2.66672 8.86449C2.66672 9.0413 2.73695 9.21087 2.86198 9.3359C2.987 9.46092 3.15657 9.53116 3.33338 9.53116H10L7.80672 11.7245C7.68118 11.8491 7.6103 12.0186 7.60968 12.1955C7.60905 12.3724 7.67873 12.5423 7.80338 12.6678C7.92803 12.7934 8.09745 12.8642 8.27436 12.8649C8.45127 12.8655 8.62118 12.7958 8.74672 12.6712L11.6067 9.80449C11.8571 9.55559 11.9986 9.21754 12 8.86449Z" fill="currentColor"/>
              </svg>
            </div>
            {items.map((segment, i) => {
              const segments = [...items]
                .map((s) => s.replace(/%3A/g, ':'))
                .slice(0, i + 1)
              return (
                <React.Fragment key={segment}>
                  <Button
                    variant="link"
                    size="sm"
                    key={segment}
                    className={classNames(
                      'hover:underline !inline font-normal capitalize whitespace-nowrap max-w-[120px] truncate',
                      i < items.length - 1
                        ? '!font-normal !text-muted-foreground'
                        : '!font-medium !text-white hover:!text-hover',
                    )}
                  >
                    <LinkInternal href={`/pool/${segments.join('/')}`}>
                      {segment.replace(/%3A/g, ':')}
                    </LinkInternal>
                  </Button>

                  {i < items.length - 1 ? (
                    <ChevronRightIcon
                      width={16}
                      height={16}
                      className="text-muted-foreground"
                    />
                  ) : null}
                </React.Fragment>
              )
            })}
          </>
        ) : null}

        <Suspense>
          <Params />
        </Suspense>
      </div>
    </div>
  )
}

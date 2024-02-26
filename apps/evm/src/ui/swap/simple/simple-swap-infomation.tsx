'use client'

import React, { FC, useState } from 'react'
import { SimpleSwapTransaction } from './simple-swap-transaction'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Tabs, TabsContent, TabsList, TabsTrigger } from '@sushiswap/ui';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { SimpleSwapLiquidity } from './simple-swap-liquidity';

export const SimpleSwapInfomation = () => {
  const FILTERS: { id: string; value: string; children: React.ReactNode }[] = [
    {
      id: 'transactions',
      value: 'transactions',
      children: (
        <div className='flex items-center gap-2'>
          <span></span>{' '}
          <span className='flex items-center gap-2'>Transactions 
            <sup>
              <InformationCircleIcon className="w-5 h-5"/>
            </sup>
          </span>
        </div>
      ),
    },
    {
      id: 'liquidity-providers',
      value: 'liquidity',
      children: (
        <div className='flex items-center gap-2'>
          <span></span>{' '}
          <span className='flex items-center gap-2'>Liquidity Providers 
            <sup>
              <InformationCircleIcon className="w-5 h-5"/>
            </sup>
          </span>
        </div>
      ),
    },
  ]
  const [tab, setTab] = useState('transactions')
  return (
    <div className='pt-10'>
      <Tabs value={tab} onValueChange={setTab} defaultValue='transactions'>
        <div className="flex justify-between mb-4">
          <div className="block sm:hidden">
            <Select value={tab} onValueChange={setTab}>
              <SelectTrigger>
                <SelectValue placeholder="Pool type" />
              </SelectTrigger>
              <SelectContent>
                {FILTERS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.children}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <TabsList className='hidden sm:inline-flex'>
            {FILTERS.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                testdata-id={item.id}
              >
                {item.children}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value='transactions'>
          <SimpleSwapTransaction/>
        </TabsContent>
        <TabsContent value='liquidity'>
          <SimpleSwapLiquidity/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
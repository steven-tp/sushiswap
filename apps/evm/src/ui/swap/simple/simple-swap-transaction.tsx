import { Card, Loader, DataTable } from "@sushiswap/ui";
import { FC, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetTransactionsArgs } from '@sushiswap/client'
import {
  DATE_COLUMN,
  TYPE_COLUMN,
  AMOUNT_IN_COLUMN,
  AMOUNT_OUT_COLUMN,
  PRICE_COLUMN,
  MAKER_COLUMN,
  TXN_COLUMN
} from "./columns";
import { useDerivedStateSimpleSwap } from "./derivedstate-simple-swap-provider";
import { useTransactionsInfinite } from "@sushiswap/client/hooks";
import { useSWRConfig } from "swr";
import { TableState } from "@tanstack/react-table";

export const  SimpleSwapTransaction: FC = () => {

  const {
    state: { token0, token1 },
  } = useDerivedStateSimpleSwap()
  const args = useMemo<GetTransactionsArgs>(() => {
    return {
      token0: token0?.wrapped.address || '',
      token1: token1?.wrapped.address || '',
      page: 1,
      size: 40
    }
  }, [token0, token1])

  const {
    data: transactions,
    isValidating,
    error,
    size,
    setSize,
  } = useTransactionsInfinite({ args, shouldFetch: true, swrConfig: useSWRConfig() })
  const data = useMemo(() => {
    let list: any = []
    transactions && transactions.forEach(item => {
      list = list.concat(...item.data)

    })
    return list
  }, [transactions])

  const state: Partial<TableState> = useMemo(() => {
    return {
      pagination: {
        pageIndex: 0,
        pageSize: data?.length,
      },
    }
  }, [data?.length])
  
  const isLoadmore = useMemo(() => {
    if(args.size && data.length < (size - 1) * args.size) {
      return false
    }
    return true
  }, [data.length, size, args.size])

  const COLUMNS = [
    DATE_COLUMN,
    TYPE_COLUMN,
    AMOUNT_IN_COLUMN,
    AMOUNT_OUT_COLUMN,
    PRICE_COLUMN,
    MAKER_COLUMN,
    TXN_COLUMN
  ]
  return (
    
    <InfiniteScroll
      dataLength={data.length}
      next={() => setSize((prev) => prev + 1)}
      hasMore={isLoadmore}
      loader={
        <div className="flex justify-center w-full py-4">
          <Loader size={16} />
        </div>
      }
    >
      <Card>
        <DataTable
          state={state}
          loading={isValidating}
          columns={COLUMNS}
          data={data}
        />
      </Card>
    </InfiniteScroll>
  )
}
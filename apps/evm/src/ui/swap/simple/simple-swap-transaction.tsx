import { Card, Loader, DataTable } from "@sushiswap/ui";
import { FC, useMemo } from "react";
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
import { useSocket } from "src/lib/hooks/useSocket";
import keyBy from 'lodash.keyby'
import { config } from "src/config";

export const  SimpleSwapTransaction: FC = () => {
  const {
    state: { token0, token1, transactions: newTransactions },
  } = useDerivedStateSimpleSwap()

  const { subcribeTransaction } = useSocket()
  const args = useMemo<GetTransactionsArgs>(() => {
    return {
      token0: token0?.wrapped.address || '',
      token1: token1?.wrapped.address || '',
      page: 1,
      size: 30
    }
  }, [token0, token1])


  const {
    data: transactions,
    isValidating,
    error,
    size,
    setSize,
  } = useTransactionsInfinite({ args, shouldFetch: args.token0 && args.token1 ? true : false, swrConfig: useSWRConfig() })
  


  const data = useMemo(() => {
    let _newTransaction = newTransactions
    if(transactions && _newTransaction.length > 0 && transactions[0].data.length > 0) {
      const keyOfTransaction = keyBy(transactions?.[0].data, 'hash')
      _newTransaction = newTransactions.filter((item) => {
        return !keyOfTransaction[item.hash]
      })

    }
    return transactions ?  _newTransaction.concat(...transactions.map(page => page?.data)) : []
  }
  , [transactions, newTransactions])


  const state: Partial<TableState> = useMemo(() => {
    return {
      pagination: {
        pageIndex: 0,
        pageSize: data.length,
      },
    }
  }, [data])
  
  const isLoadmore = useMemo(() => {
    if(args.size && data.length < (size - 1) * args.size) {
      return false
    }
    return true
  }, [data.length, size, args.size])

  const precision = localStorage.getItem(config.PRECISION_STOGRATE) || 6

  const COLUMNS = [
    DATE_COLUMN,
    TYPE_COLUMN,
    AMOUNT_IN_COLUMN(token0?.symbol),
    AMOUNT_OUT_COLUMN(token1?.symbol),
    PRICE_COLUMN(`${token0?.symbol} / ${token1?.symbol}`, Number(precision)),
    MAKER_COLUMN,
    TXN_COLUMN
  ]
  return (
    <div id="scrollableTransaction">
    <InfiniteScroll
      dataLength={data.length}
      next={() => setSize((prev) => prev + 1)}
      hasMore={isLoadmore}
      loader={
        <div className="flex justify-center w-full py-4">
          <Loader size={16} />
        </div>
      }
      scrollableTarget="scrollableTransaction"

    >
      <Card className="border-neubrutal mb-1 mr-1">
        {
          data && <DataTable
            state={state}
            loading={!data && isValidating}
            columns={COLUMNS}
            data={data}
          />
        }
      </Card>
    </InfiniteScroll>
    </div>
  )
}
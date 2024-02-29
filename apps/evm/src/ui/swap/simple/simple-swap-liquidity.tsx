import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, DataTable, Loader } from "@sushiswap/ui";
import {
  ADDRESS_COLUMN,
  PERCENT_COLUMN,
  AMOUNT_COLUMN,
  TNXS_COLUMN
} from "./columns";

export const SimpleSwapLiquidity: FC = () => {
  const isValidating = false
  const data: any = [
    { address: '0xc7Ef468b19760F93EE38AbF50B05b4e6aB154f65', percent: 69, minAmount: 63.24, maxAmount: 101 },
    { address: '0xc7Ef468b19760F93EE38AbF50B05b4e6aB154f65', percent: 42, minAmount: 41, maxAmount: 101 },
  ]
  const COLUMNS = [
    ADDRESS_COLUMN,
    PERCENT_COLUMN,
    AMOUNT_COLUMN,
    TNXS_COLUMN
  ]
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => 1}
      hasMore={data.length < 0}
      loader={
        <div className="flex justify-center w-full py-4">
          <Loader size={16} />
        </div>
      }
    >
      <Card>
        <DataTable
          loading={isValidating}
          columns={COLUMNS}
          data={data}
        />
      </Card>
    </InfiniteScroll>
  )
}
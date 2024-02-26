import { FC } from 'react'
import { SimpleSwapTransaction } from './simple-swap-transaction'
export const SimpleSwapInfomation: FC = () => {
  return (
    <div>
      <div className='flex'>
        <div>Transactions</div>
        <div>Liquidity Providers</div>
      </div>
      <SimpleSwapTransaction/>
    </div>
  )
}
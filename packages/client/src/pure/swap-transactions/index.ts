import { SWAP_TRANSACTION_API } from '../../constants'
import { parseArgs } from '../../functions'

export type GetTransactionsArgs = {
  token0?: string,
  token1?: string,
  page?: number,
  size?: number
}

type TransactionItem = {
  type:string,
  maker:string,
  hash:string,
  timestamp:number,
  amountIn:number,
  amountOut:number,
  price: number,
  tokenIn:string,
  tokenOut:string
}
export type _TransactionsType = {
  data: TransactionItem[],
}



export const getTransactionsUrl = (args: GetTransactionsArgs) => {
  return `${SWAP_TRANSACTION_API}/transactions${parseArgs(args)}`
}

// export const getTransactions = async (args: GetTransactionsArgs): Promise<Transactions> => {
//   return fetch(getTransactionsUrl(args)).then((data) => data.json())
// }

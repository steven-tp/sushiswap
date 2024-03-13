import { SWAP_TRANSACTION_API } from "@sushiswap/client"
import useSWR from "swr"
export function getPrice(token0: string, token1: string) {
  return `${SWAP_TRANSACTION_API}/config/price?token1=${token1}&token0=${token0}`
}
export const usePriceConnfig = (token0: any, token1: any) => {
  const {
    data,
  } = useSWR(getPrice(token0, token1), async (url) =>
    fetch(url).then((data) => data.json()),
  )
  const precision = data?.data !== undefined && data.data > 0 ? data.data : 0
  return precision
}
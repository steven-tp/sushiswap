import useSWRInfinite from 'swr/infinite'

import { type InfiniteSWRHookConfig } from '../../types'
import { getTransactionsUrl, type GetTransactionsArgs } from '../../pure/swap-transactions'

export const useTransactionsInfinite = ({
  args,
  shouldFetch,
}: InfiniteSWRHookConfig<GetTransactionsArgs>) => {
  return useSWRInfinite(
    (pageIndex) => {
      if (shouldFetch === false) return null
      // first page, we don't have `previousPageData`
      if (pageIndex === 0) return getTransactionsUrl(args)
      // add the cursor to the API endpoint
      return getTransactionsUrl({...args, page: pageIndex +  1})
    },
    (url) => fetch(url).then((data) => data.json()),
  )
}

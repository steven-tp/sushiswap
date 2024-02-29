import { useQuery } from '@tanstack/react-query'
import { ChainId } from 'sushi/chain'
import { Token, tryParseAmount } from 'sushi/currency'

import { angleRewardTokensValidator } from './validator'

interface UseAngleRewardTokensParams {
  chainId: ChainId
}

export const useAngleRewardTokens = ({
  chainId,
}: UseAngleRewardTokensParams) => {
  return useQuery({
    queryKey: ['getAngleRewardTokens', { chainId }],
    queryFn: async () => {
      const res = await (
        await fetch(
          'https://gist.githubusercontent.com/frankie060392/9dbf323164ce303aef67f7cf5074b4e7/raw/884e74c898caf683a3795593055f2eb2ca75d513/rewardTokens.json',
        )
      ).json()
      const parsed = angleRewardTokensValidator.parse(res[chainId])

      return parsed.validRewardTokens
        .map((el) => {
          const token = new Token({
            chainId,
            address: el.token,
            symbol: el.symbol,
            decimals: el.decimals,
          })
          return {
            minimumAmountPerEpoch: tryParseAmount(
              el.minimumAmountPerEpoch.toString(),
              token,
            ),
            token,
          }
        })
        .filter((el) => el.token.symbol !== 'aglaMerkl')
    },
  })
}

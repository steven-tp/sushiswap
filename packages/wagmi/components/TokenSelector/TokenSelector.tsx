import { ChainId } from '@sushiswap/chain'
import { Token, Type } from '@sushiswap/currency'
import { FundSource, useIsMounted } from '@sushiswap/hooks'
import { FC, memo, useEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'

import { useBalances } from '../../hooks/useBalance'
import { usePrices } from '../../hooks/usePrices'
import { TokenSelectorDialog } from './TokenSelectorDialog'
import { TokenSelectorOverlay } from './TokenSelectorOverlay'

export type TokenSelectorProps = {
  variant: 'overlay' | 'dialog'
  currency?: Type
  open: boolean
  chainId: ChainId | undefined
  tokenMap: Record<string, Token>
  customTokenMap: Record<string, Token>
  onClose(): void
  onSelect(currency: Type): void
  onAddToken(token: Token): void
  onRemoveToken({ chainId, address }: { chainId: ChainId; address: string }): void
  fundSource?: FundSource
}

export const TokenSelector: FC<TokenSelectorProps> = memo(
  ({ variant, tokenMap, chainId, fundSource = FundSource.WALLET, ...props }) => {
    const { address } = useAccount()
    const isMounted = useIsMounted()

    const _tokenMap: Record<string, Token> = useMemo(
      () => ({ ...tokenMap, ...props.customTokenMap }),
      [tokenMap, props.customTokenMap]
    )

    const _tokenMapValues = useMemo(() => Object.values(_tokenMap), [_tokenMap])

    const { data: balances } = useBalances({
      account: address,
      chainId,
      currencies: _tokenMapValues,
    })

    useEffect(() => {
      console.log('balances')
    }, [balances])

    const { data: pricesMap } = usePrices({ chainId })

    if (!isMounted) return <></>

    if (variant === 'overlay') {
      return (
        <TokenSelectorOverlay
          account={address}
          balancesMap={balances}
          tokenMap={_tokenMap}
          pricesMap={pricesMap}
          chainId={chainId}
          fundSource={fundSource}
          {...props}
        />
      )
    }

    return (
      <TokenSelectorDialog
        account={address}
        balancesMap={balances}
        tokenMap={_tokenMap}
        pricesMap={pricesMap}
        chainId={chainId}
        fundSource={fundSource}
        {...props}
      />
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.variant === nextProps.variant &&
      prevProps.currency === nextProps.currency &&
      prevProps.open === nextProps.open &&
      prevProps.tokenMap === nextProps.tokenMap &&
      prevProps.customTokenMap === nextProps.customTokenMap &&
      prevProps.fundSource === nextProps.fundSource
    )
  }
)
'use client'

import { ImageProps } from 'next/image'
import { FC } from 'react'
import { Chain, ChainId } from 'sushi/chain'
import { Currency } from 'sushi/currency'

import { cloudinaryImageLoader } from '../../cloudinary'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { LinkExternal } from '../link'

const AvaxLogo = 'avax.png'
const BnbLogo = 'bnb.png'
const EthereumLogo = 'ethereum.png'
const FtmLogo = 'ftm.png'
const OneLogo = 'one.png'
const HtLogo = 'ht.png'
const MaticLogo = 'matic.png'
const GlmrLogo = 'glmr.png'
const OktLogo = 'okt.png'
const xDaiLogo = 'xdai.png'
const CeloLogo = 'celo.png'
const PalmLogo = 'plam.png'
const MovrLogo = 'movr.png'
const FuseLogo = 'fuse.png'
const TelosLogo = 'telos.png'
const KavaLogo = 'kava.png'
const MetisLogo = 'metis.png'
const BobaLogo = 'boba.png'
const BttcLogo = 'bttc.png'
const ThundercoreLogo = 'thundercore.png'
const CoreLogo = 'core.png'
const IslmLogo = 'islm.png'
const FilecoinLogo = 'filecoin.png'
const U2ULogo = 'u2u.png'
const LOGO: Record<number, string> = {
  [ChainId.ETHEREUM]: EthereumLogo,
  [ChainId.KOVAN]: EthereumLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.ROPSTEN]: EthereumLogo,
  [ChainId.GÖRLI]: EthereumLogo,
  [ChainId.FANTOM]: FtmLogo,
  [ChainId.FANTOM_TESTNET]: FtmLogo,
  [ChainId.POLYGON]: MaticLogo,
  [ChainId.POLYGON_TESTNET]: MaticLogo,
  [ChainId.GNOSIS]: xDaiLogo,
  [ChainId.BSC]: BnbLogo,
  [ChainId.BSC_TESTNET]: BnbLogo,
  [ChainId.AVALANCHE]: AvaxLogo,
  [ChainId.AVALANCHE_TESTNET]: AvaxLogo,
  [ChainId.HECO]: HtLogo,
  [ChainId.HECO_TESTNET]: HtLogo,
  [ChainId.HARMONY]: OneLogo,
  [ChainId.HARMONY_TESTNET]: OneLogo,
  [ChainId.OKEX]: OktLogo,
  [ChainId.OKEX_TESTNET]: OktLogo,
  [ChainId.ARBITRUM]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.PALM]: PalmLogo,
  [ChainId.MOONRIVER]: MovrLogo,
  [ChainId.FUSE]: FuseLogo,
  [ChainId.TELOS]: TelosLogo,
  [ChainId.MOONBEAM]: GlmrLogo,
  [ChainId.OPTIMISM]: EthereumLogo,
  [ChainId.KAVA]: KavaLogo,
  [ChainId.ARBITRUM_NOVA]: EthereumLogo,
  [ChainId.METIS]: MetisLogo,
  [ChainId.BOBA]: EthereumLogo,
  [ChainId.BOBA_AVAX]: BobaLogo,
  [ChainId.BOBA_BNB]: BobaLogo,
  [ChainId.BTTC]: BttcLogo,
  [ChainId.POLYGON_ZKEVM]: EthereumLogo,
  [ChainId.THUNDERCORE]: ThundercoreLogo,
  [ChainId.CORE]: CoreLogo,
  [ChainId.HAQQ]: IslmLogo,
  [ChainId.ZKSYNC_ERA]: EthereumLogo,
  [ChainId.LINEA]: EthereumLogo,
  [ChainId.BASE]: EthereumLogo,
  [ChainId.SCROLL]: EthereumLogo,
  [ChainId.FILECOIN]: FilecoinLogo,
  [ChainId.U2U_NEBULAS]: U2ULogo,
}

function djb2(str: string) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i) /* hash * 33 + c */
  }
  return hash
}

function hashStringToColor(str: string) {
  const hash = djb2(str)
  const r = (hash & 0xff0000) >> 16
  const g = (hash & 0x00ff00) >> 8
  const b = hash & 0x0000ff
  return `#${`0${r.toString(16)}`.substr(-2)}${`0${g.toString(16)}`.substr(
    -2,
  )}${`0${b.toString(16)}`.substr(-2)}`
}

export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  currency: Currency
  disableLink?: boolean
}

export const Icon: FC<IconProps> = ({
  currency,
  disableLink = true,
  ...rest
}) => {
  const src = currency.isNative
    ? `native-currency/${LOGO[currency.chainId]}`
    : `${currency.chainId}/${currency.wrapped.address.toLocaleLowerCase()}.png`
  const avatar = (
    <Avatar style={{ width: rest.width, height: rest.height }}>
      <AvatarImage
        loader={cloudinaryImageLoader}
        width={Number(rest.width) ?? 20}
        src={src}
      />
      <AvatarFallback
        style={{
          background: hashStringToColor(
            `${currency.symbol} ${currency.name}` ?? '??',
          ),
        }}
        className="text-white"
      >
        {currency.symbol?.substring(0, 2)}
      </AvatarFallback>
    </Avatar>
  )

  if (disableLink) {
    return avatar
  }

  return (
    <LinkExternal
      href={Chain.tokenUrl(currency.chainId, currency.wrapped.address)}
    >
      {avatar}
    </LinkExternal>
  )
}

// // import { ethereumTokens } from '@pancakeswap/tokens'
// import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
// import { getAddress } from 'viem'
// import { FarmConfigV3, SerializedFarmConfig } from '..'
// import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
// import { USDC } from 'sushi/currency'
// import { ChainId } from 'sushi/chain'

// const v3TopFixedLps: FarmConfigV3[] = [
//   {
//     pid: 1,
//     lpAddress: '0x1ac1A8FEaAEa1900C4166dEeed0C11cC10669D36',
//     token0: USDC[ChainId.U2U_NEBULAS],
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 2,
//     lpAddress: '0x6CA298D2983aB03Aa1dA7679389D955A4eFEE15C',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 3,
//     lpAddress: '0x04c8577958CcC170EB3d2CCa76F9d51bc6E42D8f',
//     token0: ethereumTokens.usdc,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 4,
//     lpAddress: '0x9b5699D18DFF51fc65fB8ad6F70d93287C36349f',
//     token0: ethereumTokens.wbtc,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 5,
//     lpAddress: '0x517F451b0A9E1b87Dc0Ae98A05Ee033C3310F046',
//     token0: ethereumTokens.cake,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 6,
//     lpAddress: '0x11A6713B702817DB0Aa0964D1AfEe4E641319732',
//     token0: ethereumTokens.cake,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.MEDIUM,
//   },
// ]

// export const farmsV3 = defineFarmV3Configs([
//   // Keep those farms on top
//   ...v3TopFixedLps,
//   // new lps should follow after the top fixed lps
//   // latest first
//   {
//     pid: 61,
//     lpAddress: '0x350d6d813Be7B64681f91F16A98Ef360Bd42b66b',
//     token0: ethereumTokens.mstETH,
//     token1: ethereumTokens.wstETH,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 60,
//     lpAddress: '0x6177811663A60Ac211566bE5873c5Ed441D9E948',
//     token0: ethereumTokens.mswETH,
//     token1: ethereumTokens.swETH,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 59,
//     lpAddress: '0x7E9570FD7B4f1362aB924dfDE29096e0B484E009',
//     token0: ethereumTokens.xrgb,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 58,
//     lpAddress: '0xE7976f522b5a75Aedd057540c8baA05283a9F79E',
//     token0: ethereumTokens.pixel,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 57,
//     lpAddress: '0xe512273b90a5fFD21dD19fBB09B7634A3d35ADd9',
//     token0: ethereumTokens.pandora,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 56,
//     lpAddress: '0x249CfCA66a4F6D02a12376D079E5d131423A6b7a',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.weETH,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 55,
//     lpAddress: '0x3733493eC5D2C181Dcd7C54ed100641c0f07BB0e',
//     token0: ethereumTokens.pxETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 54,
//     lpAddress: '0xBc1a2e1B745497D214B99F359369d304D0aCf935',
//     token0: ethereumTokens.osak,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 53,
//     lpAddress: '0xBEA29eE3bb5F025D3C7e107883cD002c420b389d',
//     token0: ethereumTokens.ords,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 52,
//     lpAddress: '0x6db0f81Db2C3B2A85a802d511577d8522D0D8C14',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.swETH,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 51,
//     lpAddress: '0x6Fab6CEdf26f9bF03448Fe835B674be1CFf0E8BB',
//     token0: ethereumTokens.agEUR,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 50,
//     lpAddress: '0x4689e3C91036437A46A6c8B62157F58210Ba67a7',
//     token0: ethereumTokens.sdt,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 49,
//     lpAddress: '0x3A2195f4760e89e5B753fd3521a236b6a9f72EBB',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.btrfly,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 48,
//     lpAddress: '0xBC7766aE74f38f251683633d50Cc2C1CD14aF948',
//     token0: ethereumTokens.insp,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 47,
//     lpAddress: '0x135Cd19cb3c15f7eB10FC21FF79e1259a65Fc958',
//     token0: ethereumTokens.aioz,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 46,
//     lpAddress: '0x7dF7c84f2f9DCef3c0813e539878B76B89a916F8',
//     token0: ethereumTokens.id,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 45,
//     lpAddress: '0x719EBA3fB0799e215B6F82872F947418298e395e',
//     token0: ethereumTokens.bonk,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 44,
//     lpAddress: '0xEd4D5317823Ff7BC8BB868C1612Bb270a8311179',
//     token0: ethereumTokens.insp,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 43,
//     lpAddress: '0x3a1b97Fc25fA45832F588ED3bFb2A0f74ddBD4F8',
//     token0: ethereumTokens.wstETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 42,
//     lpAddress: '0x73b9aDC00794260616C51C41997cE0245b3FA012',
//     token0: ethereumTokens.meme,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 41,
//     lpAddress: '0x4D4c8F2f30e0224889ab578283A844e10B57e0F8',
//     token0: ethereumTokens.ethx,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 40,
//     lpAddress: '0x539aa397a61C8933f0E813DF9802A5d4dA653AD4',
//     token0: ethereumTokens.pyusd,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 39,
//     lpAddress: '0xfF4469F951c05529513F5FEc4464Cb10d2230bE3',
//     token0: ethereumTokens.pyusd,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 38,
//     lpAddress: '0xEa9b2D7ff9aE446ec067e50DF7C09f1Dd055bB71',
//     token0: ethereumTokens.woo,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 12,
//     lpAddress: '0x4F64951A6583D56004fF6310834C70d182142A07',
//     token0: ethereumTokens.wstETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 37,
//     lpAddress: '0x3fc47BE8264E473dd2B3e80d144F9EfFfc18F438',
//     token0: ethereumTokens.cyber,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 36,
//     lpAddress: Pool.getAddress(ethereumTokens.wom, ethereumTokens.usdt, FeeAmount.HIGH),
//     token0: ethereumTokens.wom,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 35,
//     lpAddress: Pool.getAddress(ethereumTokens.wld, ethereumTokens.weth, FeeAmount.HIGH),
//     token0: ethereumTokens.wld,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 34,
//     lpAddress: Pool.getAddress(ethereumTokens.pendle, ethereumTokens.weth, FeeAmount.HIGH),
//     token0: ethereumTokens.pendle,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 33,
//     lpAddress: Pool.getAddress(ethereumTokens.canto, ethereumTokens.weth, FeeAmount.HIGH),
//     token0: ethereumTokens.canto,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 32,
//     lpAddress: Pool.getAddress(ethereumTokens.tusd, ethereumTokens.usdt, FeeAmount.LOWEST),
//     token0: ethereumTokens.tusd,
//     token1: ethereumTokens.usdt,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 22,
//     lpAddress: Pool.getAddress(ethereumTokens.axl, ethereumTokens.usdc, FeeAmount.MEDIUM),
//     token0: ethereumTokens.axl,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 19,
//     lpAddress: Pool.getAddress(ethereumTokens.rETH, ethereumTokens.weth, FeeAmount.LOW),
//     token0: ethereumTokens.rETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 31,
//     lpAddress: Pool.getAddress(ethereumTokens.wbtc, ethereumTokens.rETH, FeeAmount.MEDIUM),
//     token0: ethereumTokens.wbtc,
//     token1: ethereumTokens.rETH,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 30,
//     lpAddress: Pool.getAddress(ethereumTokens.fuse, ethereumTokens.weth, FeeAmount.MEDIUM),
//     token0: ethereumTokens.fuse,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 29,
//     lpAddress: '0x392d0F0B7Fe5161Db89f2DB87d33a20682C12A2B',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.ens,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 28,
//     lpAddress: '0xC7F25e2FcC474816efFd9be316F2E51cCef90Ceb',
//     token0: ethereumTokens.blur,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 27,
//     lpAddress: Pool.getAddress(ethereumTokens.pepe, ethereumTokens.weth, FeeAmount.HIGH),
//     token0: ethereumTokens.pepe,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.HIGH,
//   },
//   {
//     pid: 26,
//     lpAddress: Pool.getAddress(ethereumTokens.wbeth, ethereumTokens.weth, FeeAmount.LOW),
//     token0: ethereumTokens.wbeth,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 25,
//     lpAddress: Pool.getAddress(ethereumTokens.unshETH, ethereumTokens.usdc, FeeAmount.MEDIUM),
//     token0: ethereumTokens.unshETH,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 24,
//     lpAddress: '0x5145755c0535198eec1642DC0cc96225fb28263D',
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.wncg,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 23,
//     lpAddress: '0x6E229C972d9F69c15Bdc7B07f385D2025225E72b',
//     token0: ethereumTokens.mask,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 14,
//     lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.alcx, FeeAmount.MEDIUM),
//     token0: ethereumTokens.alETH,
//     token1: ethereumTokens.alcx,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 15,
//     lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.weth, FeeAmount.LOW),
//     token0: ethereumTokens.alETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 16,
//     lpAddress: Pool.getAddress(ethereumTokens.fxs, ethereumTokens.weth, FeeAmount.MEDIUM),
//     token0: ethereumTokens.fxs,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 17,
//     lpAddress: Pool.getAddress(ethereumTokens.frxETH, ethereumTokens.weth, FeeAmount.LOW),
//     token0: ethereumTokens.frxETH,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 18,
//     lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.rpl, FeeAmount.MEDIUM),
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.rpl,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 20,
//     lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.ankrETH, FeeAmount.LOW),
//     token0: ethereumTokens.weth,
//     token1: ethereumTokens.ankrETH,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 21,
//     lpAddress: Pool.getAddress(ethereumTokens.cbEth, ethereumTokens.weth, FeeAmount.LOW),
//     token0: ethereumTokens.cbEth,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.LOW,
//   },
//   {
//     pid: 7,
//     lpAddress: '0xD9e497BD8f491fE163b42A62c296FB54CaEA74B7',
//     token0: ethereumTokens.dai,
//     token1: ethereumTokens.usdc,
//     feeAmount: FeeAmount.LOWEST,
//   },
//   {
//     pid: 8,
//     lpAddress: '0x34b8AB3a392d54D839dcDBd5Cd1330aBB24bE167',
//     token0: ethereumTokens.ldo,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 9,
//     lpAddress: '0x7ca3EdB2c8fb3e657E282e67F4008d658aA161D2',
//     token0: ethereumTokens.link,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 10,
//     lpAddress: '0x8579630AC9c53CFEb5167f90Af90d2c0d52ED09c',
//     token0: ethereumTokens.matic,
//     token1: ethereumTokens.weth,
//     feeAmount: FeeAmount.MEDIUM,
//   },
//   {
//     pid: 13,
//     lpAddress: '0x7524Fe020EDcD072EE98126b49Fa65Eb85F8C44C',
//     token0: ethereumTokens.usdc,
//     token1: ethereumTokens.stg,
//     feeAmount: FeeAmount.MEDIUM,
//   },
// ])

// const farms: SerializedFarmConfig[] = [
//   {
//     pid: 154,
//     vaultPid: 7,
//     lpSymbol: 'CAPS-ETH LP',
//     lpAddress: '0x829e9CC8D05d0D55B4494Ecb5a43D71546dd4DDb',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.caps,
//   },
//   {
//     pid: 145,
//     vaultPid: 6,
//     lpSymbol: 'FUSE-ETH LP',
//     lpAddress: '0xF9b026786522251c08d8C49e154d036Ef3Ad8Cc7',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.fuse,
//   },
//   {
//     pid: 143,
//     vaultPid: 5,
//     lpSymbol: 'STG-USDC LP',
//     lpAddress: '0x6cCA86CC27EB8c7C2d10B0672FE392CFC88e62ff',
//     quoteToken: ethereumTokens.usdc,
//     token: ethereumTokens.stg,
//   },
//   {
//     pid: 141,
//     vaultPid: 4,
//     lpSymbol: 'SDAO-ETH LP',
//     lpAddress: '0xDA7cF6a0CD5d5e8D10AB55d8bA58257813a239cA',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.sdao,
//   },
//   {
//     pid: 126,
//     vaultPid: 3,
//     lpSymbol: 'WBTC-ETH LP',
//     lpAddress: '0x4AB6702B3Ed3877e9b1f203f90cbEF13d663B0e8',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.wbtc,
//   },
//   {
//     pid: 125,
//     vaultPid: 2,
//     lpSymbol: 'ETH-USDT LP',
//     lpAddress: '0x17C1Ae82D99379240059940093762c5e4539aba5',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.usdt,
//   },
//   {
//     pid: 124,
//     vaultPid: 1,
//     lpSymbol: 'ETH-USDC LP',
//     lpAddress: '0x2E8135bE71230c6B1B4045696d41C09Db0414226',
//     quoteToken: ethereumTokens.weth,
//     token: ethereumTokens.usdc,
//   },
// ].map((p) => ({
//   ...p,
//   token: p.token.serialize,
//   quoteToken: p.quoteToken.serialize,
//   lpAddress: getAddress(p.lpAddress),
// }))

// export default farms

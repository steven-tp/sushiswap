import { AddressZero } from '@ethersproject/constants'
import { expect, Page, test } from '@playwright/test'
import { Native, Token, Type, USDC_ADDRESS } from '@sushiswap/currency'
import {
    createMultipleVests,
  createSingleVest,
  createSnapshot,
  GradedVestingFrequency,
  loadSnapshot,
  selectDate,
  switchNetwork,
  timeout,
  VestingArgs,
} from '../../../utils'

let SNAPSHOT_ID = '0x0'
const CHAIN_ID = parseInt(process.env.CHAIN_ID as string)
const RECIPIENT = '0x23defc2ca207e7fbd84ae43b00048fb5cb4db5b2'
const NATIVE_TOKEN = Native.onChain(CHAIN_ID)
const USDC = new Token({
  chainId: CHAIN_ID,
  address: USDC_ADDRESS[CHAIN_ID as keyof typeof USDC_ADDRESS],
  decimals: 18,
  symbol: 'USDC',
  name: 'USDC Stablecoin',
})

test.beforeAll(async () => {
  SNAPSHOT_ID = await createSnapshot(CHAIN_ID)
})

test.afterAll(async () => {
  await loadSnapshot(CHAIN_ID, SNAPSHOT_ID)
})

  test('Create multiple vest', async ({ page }) => {
    const url = (process.env.PLAYWRIGHT_URL as string).concat('/vesting/create/multiple')
    await page.goto(url)
    await switchNetwork(page, CHAIN_ID)

    await createMultipleVests(page, CHAIN_ID, [
        // Add native vesting
        {
            chainId: CHAIN_ID,
            token: NATIVE_TOKEN,
            startInMonths: 1,
            recipient: RECIPIENT,
            graded: {
              stepAmount: '1',
              steps: 12,
              frequency: GradedVestingFrequency.MONTHLY,
            },
          },
          // Add native vesting with cliff
          {
            chainId: CHAIN_ID,
            token: NATIVE_TOKEN,
            startInMonths: 1,
            recipient: RECIPIENT,
            graded: {
              stepAmount: '1',
              steps: 12,
              frequency: GradedVestingFrequency.MONTHLY,
            },
            cliff: {
              amount: '10',
              cliffEndsInMonths: 3,
            },
          },
          // Add graded usdc vesting
          {
            chainId: CHAIN_ID,
            token: USDC,
            startInMonths: 1,
            recipient: RECIPIENT,
            graded: {
              stepAmount: '0.0001',
              steps: 10,
              frequency: GradedVestingFrequency.BI_WEEKLY,
            },
          },
          // Add usdc vesting with cliff
          {
            chainId: CHAIN_ID,
            token: USDC,
            startInMonths: 1,
            recipient: RECIPIENT,
            graded: {
              stepAmount: '0.0001',
              steps: 10,
              frequency: GradedVestingFrequency.BI_WEEKLY,
            },
            cliff: {
              amount: '0.00001',
              cliffEndsInMonths: 3,
            },
          }
    ])

  })
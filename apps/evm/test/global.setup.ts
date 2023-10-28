import { type FullConfig } from '@playwright/test'
import { startProxy } from '@viem/anvil'

export default async function globalSetup(_config: FullConfig) {
  console.log('globalSetup')
  return startProxy({
    port: Number(process.env.ANVIL_PORT || 8545),
    options: {
      forkUrl: String(process.env.ANVIL_FORK_URL),
      forkBlockNumber: Number(process.env.ANVIL_BLOCK_NUMBER),
      startTimeout: 60_000,
    },
  })
}

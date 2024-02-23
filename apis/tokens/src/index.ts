import 'dotenv/config'

import cors from 'cors'
import express, { type Express } from 'express'
import { CHAIN_ID, PORT } from './config.js'
import tokensByChainAndAddress from './handlers/token-by-chain-and-address.js'
import tokensByChain from './handlers/tokens-by-chain.js'
import tokens from './handlers/tokens.js'
import v0TokenByChainAndAddress from './handlers/v0-token-by-chain-and-address.js'

const app: Express = express()

app.set('json replacer', (_key: string, value: any) =>
  typeof value === 'bigint' ? value.toString() : value,
)

app.use(cors())

app.get('/v0', tokens)
app.get('/v0/:chainId/:address', v0TokenByChainAndAddress)
app.get('/v1/:chainId', tokensByChain)
app.get('/v1/:chainId/:address', tokensByChainAndAddress)
app.listen(PORT, () => {
  console.log(`Tokens list ${CHAIN_ID} app listening on port ${PORT}`)
})

process.on('SIGTERM', (code) => {
  console.log(`About to exit with code: ${code}`)
})

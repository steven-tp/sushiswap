import 'dotenv/config'

import cors from 'cors'
import express, { type Express } from 'express'
import { PORT } from './config.js'
import tokens from './handlers/tokens.js'

const app: Express = express()

app.set('json replacer', (_key: string, value: any) =>
  typeof value === 'bigint' ? value.toString() : value,
)

app.use(cors())

app.get('/', tokens)

app.listen(PORT, () => {
  console.log(`Tokens list app listening on port ${PORT}`)
})

process.on('SIGTERM', (code) => {
  console.log(`About to exit with code: ${code}`)
})

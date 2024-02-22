import { default as DEFAULT_TOKEN_LIST } from '@sushiswap/default-token-list' assert { type: 'json' }

const handler = async (_request: any, response: any) => {
  response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=600')
  return response.status(200).json(DEFAULT_TOKEN_LIST)
}

export default handler

import { getTokensByChainId } from '../lib/api'
import { TokensByChainIdApiSchema } from '../lib/schemas/chainId/index'

const handler = async (request: any, response: any) => {
  response.setHeader(
    'Cache-Control',
    's-maxage=900, stale-while-revalidate=86400',
  )

  const result = TokensByChainIdApiSchema.safeParse(request.query)
  if (!result.success) {
    return response.status(400).json(result.error.format())
  }

  const { chainId } = result.data

  const tokens = await getTokensByChainId(chainId)
  return response.status(200).json(tokens)
}

export default handler

import { fetchTokensFromLists } from '../lib/api/v1'

const handler = async (request: any, response: any) => {
  response.setHeader(
    'Cache-Control',
    's-maxage=1800, stale-while-revalidate=3600',
  )
  const { chainId } = request.params

  const tokenList = await fetchTokensFromLists(chainId)
  return response.status(200).json(tokenList)
}

export default handler

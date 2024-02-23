import { getToken } from '../lib/api.js'

const handler = async (request: any, response: any) => {
  response.setHeader(
    'Cache-Control',
    's-maxage=900, stale-while-revalidate=86400',
  )

  const { chainId, address } = request.params

  try {
    const token = await getToken(chainId, address)
    return response.status(200).json(token)
  } catch {
    return response.status(404).send('Not found')
  }
}

export default handler

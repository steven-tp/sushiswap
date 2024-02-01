import { PoolsApiSchema, getPoolsFromDB } from '@sushiswap/client/api'
import { NextResponse } from 'next/server.js'
import { CORS } from '../cors'

export const revalidate = 15

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log(searchParams)
  const result = PoolsApiSchema.safeParse(Object.fromEntries(searchParams))
  console.log("🚀 ~ GET ~ result:", result)
  
  if (!result.success) {
    return NextResponse.json(result.error.format(), { status: 400 })
  }

  const pools = await getPoolsFromDB(result.data)
  return NextResponse.json(pools, { headers: CORS })
}

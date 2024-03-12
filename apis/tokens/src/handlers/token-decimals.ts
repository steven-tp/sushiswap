
import Decimal from 'decimal.js-light'

const handler = async (request: any, response: any) => {
  response.setHeader(
    'Cache-Control',
    's-maxage=900, stale-while-revalidate=86400',
  )

  // Adjust the global configuration if required (these are the defaults)
  Decimal.set({
    precision: 20,
    rounding: Decimal.ROUND_HALF_UP,
    toExpNeg: -7,
    toExpPos: 21
  });

  const query = request.query
  if(query.numerator && query.denominator) {
    const significantDigits = Number(query.significantDigits) || 4
    const phi = new Decimal(Number(query.numerator)/ Number(query.denominator)).toSignificantDigits(significantDigits);
    return response.status(200).json({
      value: phi.decimalPlaces()
    })
  }
  return response.status(200).json({
    value: 0
  })
}

export default handler

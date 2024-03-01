import 'dotenv/config'

(async function() {
  console.log('start job')
  function sleep (time: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
  }

  const url = process.env.JOB_URL
  const poolTimer = parseInt(process.env.POOL_TIMER || '300000')
  const priceTimer = parseInt(process.env.PRICE_TIMER || '300000')

  fetchPools()
  fetchPrices()

  async function fetchPools() {
    while (true) {
      fetch(`${url}/pools?protocol=SUSHISWAP_V3&chainId=2484`).catch(e => { console.log(e) }).finally(() => {
        console.log('Fetched pools done')
      })
      await sleep(poolTimer)
    }
  }

  async function fetchPrices() {
    while (true) {
      fetch(`${url}/prices?protocol=SUSHISWAP_V3&chainId=2484`).catch(e => { console.log(e) }).finally(() => {
        console.log('Fetched prices done')
      })
      await sleep(priceTimer)
    }
  }
})()

export default async function getData({ crypto, exchange }) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${exchange}`

  return await fetch(url)
    .then(response => response.json())
    .then(({ DISPLAY }) => DISPLAY[crypto][exchange])
    .then(({ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE }) => ({
      price: PRICE,
      highDay: HIGHDAY,
      lowDay: LOWDAY,
      change24Hour: CHANGEPCT24HOUR,
      lastUpdate: LASTUPDATE
    }))
}

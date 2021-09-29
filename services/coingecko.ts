// https://www.coingecko.com/en/api/documentation

async function api(query: string) {
  const baseUrl = 'https://api.coingecko.com/api/v3';
  const response = await fetch(`${baseUrl}${query}`);
  return response.json();
}

async function fetchCoinInfo(coin: string, currency: string) {
  let ids = '';
  switch (coin) {
    case 'oxen':
    default:
      ids = 'loki-network';
      break;
  }
  const response = await api(
    `/coins/markets?ids=${ids}&vs_currency=${currency}`,
  );
  return response;
}

export async function fetchCurrentPrice(
  coin: string = 'oxen',
  currency: string = 'usd',
) {
  const data = await fetchCoinInfo(coin, currency);
  return data[0]['current_price'];
}

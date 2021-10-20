// https://github.com/oxen-io/oxen-observer

async function api(query: string) {
  const baseUrl = 'https://oxen.observer/api';
  const response = await fetch(`${baseUrl}${query}`);
  return response.json();
}

export async function fetchCurrentPrice(fiat: string = 'usd'): Promise<Number> {
  const fallbackPrice = 0.6; // updated on 08/10/2021
  try {
    const data = await api(`/price/${fiat}`);
    return Number(data[`${fiat}`]);
  } catch (err) {
    console.error('Oxen Observer API: Error fetching current price ', err);
    console.log('Oxen Observer API: Using fallback value ', fallbackPrice);
    return fallbackPrice;
  }
}

export async function fetchActiveNodes(): Promise<Number> {
  const fallbackActiveNodes = 1745; // updated on 08/10/2021
  try {
    const nodeStats = await api(`/service_node_stats`);
    const activeNodes = nodeStats.data['active'];
    return Number(activeNodes);
  } catch (err) {
    console.error('Oxen Observer API: Error fetching active nodes ', err);
    console.log(
      'Oxen Observer API: Using fallback value ',
      fallbackActiveNodes,
    );
    return fallbackActiveNodes;
  }
}

export async function fetchCoinsLocked(): Promise<Number> {
  const fallbackCoinsLocked = 0.48; // updated on 08/10/2021
  try {
    const circulatingSupply = await api(`/circulating_supply`);
    const nodeStats = await api(`/service_node_stats`);
    const staked = nodeStats.data['staked'];

    return Number(
      (parseFloat(staked) / parseFloat(circulatingSupply)).toFixed(2),
    );
  } catch (err) {
    console.error('Oxen Observer API: Error fetching coins locked ', err);
    console.log(
      'Oxen Observer API: Using fallback value ',
      fallbackCoinsLocked,
    );
    return fallbackCoinsLocked;
  }
}

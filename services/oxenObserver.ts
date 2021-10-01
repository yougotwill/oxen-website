// https://github.com/oxen-io/oxen-observer

async function api(query: string) {
  const baseUrl = 'https://oxen.observer/api';
  const response = await fetch(`${baseUrl}${query}`);
  return response.json();
}

export async function fetchCurrentPrice(fiat: string = 'usd'): Promise<Number> {
  const data = await api(`/price/${fiat}`);
  return Number(data[`${fiat}`]);
}

export async function fetchActiveNodes(): Promise<Number> {
  const nodeStats = await api(`/service_node_stats`);
  const activeNodes = nodeStats.data['active'];
  return Number(activeNodes);
}

export async function fetchCoinsLocked(): Promise<Number> {
  const circulatingSupply = await api(`/circulating_supply`);
  const nodeStats = await api(`/service_node_stats`);
  const staked = nodeStats.data['staked'];

  return Number(
    (parseFloat(staked) / parseFloat(circulatingSupply)).toFixed(2),
  );
}

const API_URL = 'api.coincap.io/v2/assets';

const getCriptos = async () => {
  return await fetch(API_URL)
  .then(response => response.json())
  .then(data => data.data)
  .catch((error) => error.toString());
}

const setCriptos = async () => {
  const coins = await getCriptos();
  const coinsList = document.getElementById('criptosContainer');
  coins.filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCriptos();

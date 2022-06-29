const apiUrl =  'https://api.coincap.io/v2/assets';

const fetchCrypto = async () => {
  const cryptoObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const coins = await fetch(apiUrl, cryptoObject)
  .then(response => response.json())
  .then((cryptos) => cryptos.data)
  .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const cryptoCoins = await fetchCrypto();

  const coinList = document.getElementById('cryptoData');

  cryptoCoins.filter((coin) => coin.rank <= 10)
  .forEach((coin) => {
    const li = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    li.innerText = `${coin.id} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinList.appendChild(li);
  });
}

window.onload = () => setCoins();

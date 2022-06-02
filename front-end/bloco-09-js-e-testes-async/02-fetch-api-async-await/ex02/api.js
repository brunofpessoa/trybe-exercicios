function setNewCrypto(name, symbol, value) {
  const newLi = document.createElement('li');
  newLi.innerHTML = `${name} (${symbol}): ${value} USD`;
  document.getElementById('crypto-list').append(newLi);
}

const API_URL = `https://api.coincap.io/v2/assets`;

async function getCryptoInfo() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    const data = await json.data;
    for (let index = 1; index <= 10; index += 1) {
      const currentCrypto = data.find((crypto) => crypto.rank === index.toString());
      
      setNewCrypto(currentCrypto.name, currentCrypto.symbol, Number(currentCrypto.priceUsd).toFixed(2));
    }
  } catch (error) {
    console.log(error.message);
  }
}

window.onload = getCryptoInfo;
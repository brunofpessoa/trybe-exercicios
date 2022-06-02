const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  try {
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
    const data = await response.json();
    document.getElementById('jokeContainer').innerText = data.joke;
  } catch (error) {
    console.log(error.message);
  }
}

window.onload = () => fetchJoke();
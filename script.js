async function fetchJokes() {
    const jokes = document.querySelectorAll('.joke');
    for (let joke of jokes) {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            joke.innerHTML = data.type === 'single' ? data.joke : `${data.setup}<br>${data.delivery}`;
        } catch (error) {
            joke.innerHTML = "Oops! Couldn't fetch a joke.";
        }
    }
}

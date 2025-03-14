const jokeElement = document.getElementById("joke");
const button = document.getElementById("newJokeBtn");

function fetchJoke() {
    jokeElement.textContent = "Loading joke...";

    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            jokeElement.textContent = data.joke;
        })
        .catch(error => {
            jokeElement.textContent = "Failed to load joke. Try again!";
            console.error("Error fetching joke:", error);
        });
}

button.addEventListener("click", fetchJoke);

fetchJoke();

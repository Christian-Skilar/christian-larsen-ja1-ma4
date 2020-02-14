const gameDetails = "https://api.rawg.io/api/games/4200";

fetch(gameDetails)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGameDetails(json);
	})
	.catch(function() {
		console.dir(error);
	});

function createGameDetails(json) {
	console.dir(json);

	const gameName = document.querySelector("h1");
	gameName.innerHTML = json.name;

	const image = document.querySelector(".image");
	image.style.backgroundImage = "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";

	const gameDescription = document.querySelector(".description");
	gameDescription.innerHTML = json.description;
}

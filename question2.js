const gamesUrl = "https://api.rawg.io/api/games";

function handleResponse(response) {
	return response.json();
}

function createGames(json) {
	const results = json.results;
	console.dir(results);

	const resultsContainer = document.querySelector(".results");

	let html = "";

	results.forEach(function(result) {
		html += `<div class="game">
                <h2>${result.name}</h2>
                <img src="${result.background_image}" alt="Name of game">
                </div>`;
	});

	resultsContainer.innerHTML = html;
}
function handleError(error) {
	console.log(error);
}

fetch(gamesUrl).then(handleResponse).then(createGames).catch(handleError);

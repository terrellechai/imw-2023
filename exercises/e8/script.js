// Add click event listener to the element with id "search"
document.querySelector("#search").addEventListener("click", getPokemon);

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to convert a string to lowercase
function lowerCaseName(string) {
  return string.toLowerCase();
}

// Function to get Pokemon data from the PokeAPI
function getPokemon(e) {
  // Get the value from the input field with id "pokemonName"
  const name = document.querySelector("#pokemonName").value;

  // Convert the Pokemon name to lowercase for effective searching
  const pokemonName = lowerCaseName(name);

  // Fetch Pokemon data from the PokeAPI using the provided name
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      // Display the retrieved Pokemon data in the ".pokemonBox" element
      document.querySelector(".pokemonBox").innerHTML = `
           <div>
                <img src="${
                  data.sprites.other["official-artwork"].front_default
                }" alt="${data.name}">
            </div>
            <div class="pokemonInfo"></div>
            <h1>${capitalizeFirstLetter(data.name)}</h1>
            <p>Type: ${data.types["0"].type.name} 
        </div>`;
    })
    .catch((err) => {
      // Log an error message if the Pokemon is not found
      console.log("Pokemon not found", err);
    });

  // Prevent the default form submission behavior
  e.preventDefault();
}

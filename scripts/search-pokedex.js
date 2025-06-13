document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const imgContainer = document.getElementById("image-container");
  const infoContainer = document.getElementById("info-text");
  const input = document.getElementById("search-input-text");

  async function searchPokemon() {
    const userInput = document
      .getElementById("search-input-text")
      .value.trim()
      .toLowerCase();

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );
      if (!response.ok) {
        throw new Error("Pokémon not found. Try again.");
      }
      const data = await response.json();
      showPokemon(data);
      input.value = "";
    } catch (error) {
      infoContainer.innerText = error.message;
      input.value = "";
      imgContainer.innerHTML = "";
    }
  }

  searchButton.addEventListener("click", searchPokemon);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPokemon();
    }
  });

  function showPokemon(pokemon) {
    imgContainer.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img"/>`;
    infoContainer.classList.add("d-flex", "flex-column", "flex-md-row");
    infoContainer.style.rowGap = "0";
    infoContainer.style.columnGap = "48px";
    infoContainer.innerHTML = `
    <div class="info-col">
      <ul class="info-list">
        <li>Order:</li>
        <li>${pokemon.order}</li>
        <li>Name:</li>
        <li>${pokemon.name}</li>
        <li>Height:</li>
        <li>${pokemon.height}</li>
        <li>Weight:</li>
        <li>${pokemon.weight}</li>
      </ul>
    </div>
    <div class="info-col">
      <ul class="info-list">
        <li>Type:</li>
        <li>${pokemon.types[0]?.type.name}</li>
        <li>Abilities:</li>
        <li>
          <ul class="abilities-list">  
            <li>${pokemon.abilities[0]?.ability.name || ""}</li>
            <li>${pokemon.abilities[1]?.ability.name || ""}</li>
            <li>${pokemon.abilities[2]?.ability.name || ""}</li>
          </ul>
      </ul>
    </div>
  `;
  }

  const clearButton = document.getElementById("clear-button");

  function clearSearch() {
    imgContainer.innerHTML = "";
    infoContainer.innerHTML = "Welcome to your Pokédex";
    infoContainer.classList.remove("d-flex", "flex-row", "gap-2");
  }

  clearButton.addEventListener("click", clearSearch);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      clearSearch();
    }
  });
});

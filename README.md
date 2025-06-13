# Coding Temple SE Assignment: Pokedex (PokeAPI Integration)

To create a page that interacts with PokeAPI to display basic Pokemon information by fetching data from an API.

## index.html

- Created a responsive page that resembles a pokedex using custom CSS and bootstrap.
- There's a section for future Pokemon images and a separate section for text data.
- Has a search bar (text input) and a button.

## search-pokedex.js

- Fetches data from PokeAPI (uses async/await functions) to get data for the pokemon that user inputs in the seach bar.
- Function runs either on clicking the search button, or by clicking enter (2 event listeners).
- Search bar will clear on search.
- Added a clear button/click event that will clear and reset any pokemon data that is still showing.
- If there's an error with spelling (and there's no pokemon in the API that matches user input), then error message will show and clear any current pokemon data and image (if there was a previous search).
- Can also clear by pressing "escape" on keyboard.

## dynamic-bottom-padding.js

- On larger screens (> 1200px), I wanted to center the "screen" where the pokemon image shows up to align it with the container with the text info area & search bar.
  - The issue was that a footer with a dynamic height was added to the continer with the text info & search bar, which offset the container differently that the container with the "screen"/image.
  - My quick fix solution was to create an empty div to mimic the footer in the "screen"/image container and set the heightusing Javascript to always match the height of the footer.
  - I'm sure there was probably a better/cleaner way to do this.

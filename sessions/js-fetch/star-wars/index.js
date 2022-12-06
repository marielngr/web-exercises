console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

// Query root element and renderElement function
const root = document.querySelector("[data-js='root']");

function renderElement(element) {
  root.append(element); // Append the element to the page
}

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

function fetchDataAndRender() {
  fetch(); // ?
}

// --^-- your code here --^--

function Card(characterData) {
  const card = document.createElement("article"); // Create a new article element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = characterData.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

  card.append(birthYear);

  return card;
}

// Datos de Pokemon básicos
const pokemonData = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["grass", "poison"],
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    id: 4,
    name: "charmander",
    types: ["fire"],
    stats: { hp: 39, attack: 52, defense: 43, speed: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    id: 7,
    name: "squirtle",
    types: ["water"],
    stats: { hp: 44, attack: 48, defense: 65, speed: 43 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    id: 25,
    name: "pikachu",
    types: ["electric"],
    stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    id: 39,
    name: "jigglypuff",
    types: ["normal", "fairy"],
    stats: { hp: 115, attack: 45, defense: 20, speed: 20 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
  },
  {
    id: 94,
    name: "gengar",
    types: ["ghost", "poison"],
    stats: { hp: 60, attack: 65, defense: 60, speed: 110 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    id: 130,
    name: "gyarados",
    types: ["water", "flying"],
    stats: { hp: 95, attack: 125, defense: 79, speed: 81 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    id: 150,
    name: "mewtwo",
    types: ["psychic"],
    stats: { hp: 106, attack: 110, defense: 90, speed: 130 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },
  {
    id: 448,
    name: "lucario",
    types: ["fighting", "steel"],
    stats: { hp: 70, attack: 110, defense: 70, speed: 90 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
  }
];

let allPokemon = [...pokemonData];
let filteredPokemon = [...pokemonData];

// Función para crear una card de Pokemon
function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.className = 'pokemon-card';
  
  const typesHTML = pokemon.types.map(type => 
    `<span class="pokemon-type type-${type}">${type}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</div>
    <div class="pokemon-image">
      <img src="${pokemon.image}" alt="${pokemon.name}" loading="lazy">
    </div>
    <h3 class="pokemon-name">${pokemon.name}</h3>
    <div class="pokemon-types">
      ${typesHTML}
    </div>
    <div class="pokemon-stats">
      <h4>📊 Estadísticas Base</h4>
      <div class="stat-item">
        <span>❤️ HP:</span>
        <span>${pokemon.stats.hp}</span>
      </div>
      <div class="stat-item">
        <span>⚔️ Ataque:</span>
        <span>${pokemon.stats.attack}</span>
      </div>
      <div class="stat-item">
        <span>🛡️ Defensa:</span>
        <span>${pokemon.stats.defense}</span>
      </div>
      <div class="stat-item">
        <span>💨 Velocidad:</span>
        <span>${pokemon.stats.speed}</span>
      </div>
    </div>
  `;
  
  return card;
}

// Función para renderizar todos los Pokemon
function renderPokemon(pokemonList) {
  const grid = document.getElementById('pokemonGrid');
  grid.innerHTML = '';
  
  if (pokemonList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
        <h3>😔 No se encontraron Pokemon</h3>
        <p>Intenta con otro término de búsqueda</p>
      </div>
    `;
    return;
  }
  
  pokemonList.forEach(pokemon => {
    const card = createPokemonCard(pokemon);
    grid.appendChild(card);
  });
}

// Función de búsqueda
function filterPokemon(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  if (term === '') {
    filteredPokemon = [...allPokemon];
  } else {
    filteredPokemon = allPokemon.filter(pokemon => 
      pokemon.name.toLowerCase().includes(term) ||
      pokemon.types.some(type => type.toLowerCase().includes(term)) ||
      pokemon.id.toString().includes(term)
    );
  }
  
  renderPokemon(filteredPokemon);
}

// Configurar búsqueda
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  
  searchInput.addEventListener('input', (e) => {
    filterPokemon(e.target.value);
  });
  
  // Limpiar búsqueda al hacer click en el input
  searchInput.addEventListener('focus', () => {
    if (searchInput.value === '') {
      renderPokemon(allPokemon);
    }
  });
}

// Función de inicialización
function init() {
  console.log('🚀 Iniciando PokéMundo...');
  
  // Configurar búsqueda
  setupSearch();
  
  // Renderizar Pokemon iniciales
  renderPokemon(allPokemon);
  
  console.log('✅ PokéMundo cargado correctamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
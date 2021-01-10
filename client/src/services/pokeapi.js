import { Pokedex } from 'pokeapi-js-wrapper';

const pokedex = new Pokedex({ 
  cacheImages: true,
  cache: true,
});

export default pokedex;
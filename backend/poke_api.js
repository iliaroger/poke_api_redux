const { RESTDataSource } = require('apollo-datasource-rest');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  getPokemons(quantity) {
    return this.get(`pokemon?limit=${quantity}`);
  }

  getPokemon(name) {
    return this.get(`pokemon/${name}`);
  }
}

module.exports = PokeAPI;

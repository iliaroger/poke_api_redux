const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getPokemons(quantity: Int!): PokemonList
    getPokemon(id: String!): Pokemon
  }

  type PokemonList {
    results: [SinglePokemon]
  }

  type SinglePokemon {
    name: String!
  }

  type Pokemon {
    name: String!
    sprites: PokemonSprite!
    types: [PokemonType!]
  }

  type PokemonSprite {
    front_default: String!
  }

  type PokemonType {
    type: AllTypes!
  }

  type AllTypes {
    name: String
  }
`;

module.exports = typeDefs;

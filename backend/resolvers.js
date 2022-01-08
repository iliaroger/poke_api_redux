const resolvers = {
  Query: {
    getPokemons: (_, { id }, { dataSources }, info) => {
      return dataSources.PokeAPI.getPokemons(id);
    },
    getPokemon: (_, { id }, { dataSources }, info) => {
      return dataSources.PokeAPI.getPokemon(id);
    },
  },
};

module.exports = resolvers;

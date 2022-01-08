const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const PokeAPI = require('./poke_api');
const resolvers = require('./resolvers');

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        PokeAPI: new PokeAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`
    Server is running!
    Listening on port: ${port}
    Query at: ${url}
  `);
}

startApolloServer(typeDefs, resolvers);

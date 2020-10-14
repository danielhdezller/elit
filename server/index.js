const { ApolloServer } = require('apollo-server');

const typeDefs = require('./GraphQL/graphQlSchemas');
const resolvers = require('./GraphQL/resolvers');

// const { createStore } = require('./utils');

// const store = createStore();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

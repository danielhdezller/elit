const { ApolloServer } = require('apollo-server');
const typeDefs = require('./GraphQL/graphQlSchemas');
const resolvers = require('./GraphQL/resolvers');
const db = require('./models/index');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, cors: {origin: '*'} });

// The `listen` method launches a web server.
(async () => {
  try {
    await db.sequelize.sync();
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();

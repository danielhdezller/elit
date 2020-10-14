// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const fetch = require('node-fetch');
const express = require('express');

const { requestGithubUser } = require('./authenticationMidleware');

const typeDefs = require('./GraphQL/graphQlSchemas');
const resolvers = require('./GraphQL/resolvers');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({app});

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  const query = JSON.stringify({
    query: `mutation {
          authorizeWithGithub(
            code: "${code}") {
              token
            }
        }
    `
  });

  // instead of doing that, I'd recommend just to execute the logic implemented in the mutation, so we
  // can avoid additional http call.
  const response = await fetch(`http://localhost:4000${server.graphqlPath}`, { // TODO http://localhost:4000 should not be hardcoded!
    headers: {'content-type': 'application/json'},
    method: 'POST',
    body: query,
  });

  res.json(await response.json());
});


// The `listen` method launches a web server.
app.listen({port: 4000}, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});

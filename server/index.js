const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const fetch = require('node-fetch');

let currentUser;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    githubLoginUrl: String!
    me: User
  }
  type Mutation {
    authorizeWithGithub(code: String!): AuthPayload!
  }
  type User {
    name: String
    githubLogin: String
    githubToken: String
    avatar: String
  }
  type AuthPayload {
    token: String!
    user: User!
  }
`;

const resolvers = {
  Query: {
    me: () => currentUser,
    githubLoginUrl: () =>
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`,
  },
  Mutation: {
    async authorizeWithGithub(parent, { code }) {
      // 1. Obtain data from GitHub
      let githubUser = await requestGithubUser({
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
        code,
      });
      // 2. Package the results in a single object, write the value to currentUser global variable
      currentUser = {
        name: githubUser.name,
        githubLogin: githubUser.login,
        githubToken: githubUser.access_token,
        avatar: githubUser.avatar_url,
      };
      // 3. Return user data and their token
      return { user: currentUser, token: githubUser.access_token };
    },
  },
};

const requestGithubToken = (credentials) => {
  console.log('credentials:', credentials);
  return fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw new Error(JSON.stringify(error));
    });
};

const requestGithubUserAccount = (token) => {
  return fetch(`https://api.github.com/user?access_token=${token}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};

const requestGithubUser = async (credentials) => {
  const res = await requestGithubToken(credentials);
  const githubUser = await requestGithubUserAccount(res.access_token);
  console.log('githubUser:', githubUser); //TO SEE THE USER DATA RESPONSE OF GITHUB
  return { ...githubUser, access_token: res.access_token };
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

require('dotenv').config();

const { requestGithubUser } = require('../authenticationMidleware');

let currentUser;

const resolvers = {
  Query: {
    me: () => currentUser,
    githubLoginUrl: () =>
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`
  },
  Mutation: {
    async authorizeWithGithub(parent, { code }) {
      console.log('code', code);
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

module.exports = resolvers;


/*
Sessions
session_id | user_id
-----------|---------
abcdefgh   | marcin.kolny@gmail.com
*/
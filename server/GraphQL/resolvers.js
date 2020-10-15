require('dotenv').config();
const db = require('../models/index');
const User = db.User;
const { requestGithubUser } = require('../authenticationMidleware');

let currentUser;

const resolvers = {
  Query: {
    me: () => currentUser,
    githubLoginUrl: () =>
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`,
  },
  Mutation: {
    async authorizeWithGithub(parent, { code }) {
      console.log('User:', User.findOne);
      // 1. Obtain data from GitHub
      let githubUser = await requestGithubUser({
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
        code,
      });
      // 2. Package the results in a single object, write the value to currentUser global variable
      currentUser = {
        id: githubUser.id,
        email: githubUser.email,
        name: githubUser.name,
        githubLogin: githubUser.login,
        githubToken: githubUser.access_token,
        location: githubUser.location,
        avatar: githubUser.avatar_url,
      };
      console.log('currentUser:', currentUser);
      // 3. Return user data and their token
      let user;
      try {
        user = await User.findOne({
          where: { id: `${currentUser.id}` },
        });

        if (!user) {
          const {
            id,
            email,
            name,
            githubLogin,
            githubToken,
            location,
            avatar,
          } = currentUser;
          await User.create({
            id: id,
            email: email,
            name: name,
            githubLogin: githubLogin,
            githubToken: githubToken,
            location: location,
            avatar: avatar,
          });
        }
      } catch (err) {
        console.error(err);
      }
      console.log('hello:');

      console.log('user:', user);
      return { user: currentUser, token: githubUser.access_token };
    },
  },
};

module.exports = resolvers;

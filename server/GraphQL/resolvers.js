require('dotenv').config();
const db = require('../models/index');
const User = db.User;
const Event = db.Event;
const { requestGithubUser } = require('../authenticationMidleware');

let currentUser;

const resolvers = {
  Query: {
    githubLoginUrl: () =>
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`,
    getUsers: async () => {
      try {
        user = await User.findAll();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    getEvents: async () => {
      try {
        const event = await Event.findAll();
        return event;
      } catch (error) {
        console.log(error);
      }
      return {
        response: 'Event created',
      };
    },
    getUserLogedIn: async (parent, { userId }) => {
      try {
        const user = await User.findOne({
          where: { id: userId },
        });
        return user;
      } catch (err) {
        console.log(error);
      }
    },
    getUser: async (parent, { githubLogin }) => {
      try {
        const user = await User.findOne({
          where: { githubLogin: githubLogin },
        });
        console.log('user:', user);
        return user;
      } catch (err) {
        console.log(error);
      }
    },
    getEventByUser: async (parent, { userId }) => {
      try {
        const event = await Event.findAll({
          where: { userId: userId },
        });
        return event;
      } catch (err) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async DeleteEvent(parent, { id_event }) {
      try {
        Event.destroy({
          where: { id_event: id_event },
        });
      } catch (err) {
        console.error(err);
      }
      return {
        response: 'Event deleted',
      };
    },

    async CreateEvent(parent, { input }) {
      try {
        await Event.create({
          title: input.eventTitle,
          description: input.eventDescription,
          date: input.date,
          link: input.eventLink,
          location: input.location,
          eventLeader: input.userName,
          userId: input.userId,
          participants: 0,
          categories: input.categories,
        });
      } catch (err) {
        console.error(err);
      }
      return {
        response: 'Event created',
      };
    },

    async UpdateUserData(parent, { input }) {
      console.log('input:', input);
      try {
        const userId = input.userId;
        const user = await User.findOne({ where: { id: userId } });
        console.log('user:', user);
        user.name = input.name;
        user.email = input.email;
        user.linkedIn = input.linkedIn;
        user.gitHub = input.gitHub;
        user.portfolio = input.portfolio;
        user.bio = input.bio;
        user.userStacks = input.userStacks;
        await user.save();
      } catch (err) {
        console.error(err);
      }
      return {
        response: 'User data updated',
      };
    },

    async authorizeWithGithub(parent, { code }) {
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
      return { user: currentUser, token: githubUser.access_token };
    },
  },
};

module.exports = resolvers;

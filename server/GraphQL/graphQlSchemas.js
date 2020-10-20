const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    githubLoginUrl: String!
    userData: User
    getUsers: [User]

  }

  type Mutation {
    authorizeWithGithub(code: String!): AuthPayload!
    CreateEvent(input: EventInput!): EventData!
    CreateUserData(input: UserInput!, id: Int): User!
  }

  type User {
    id: Int
    email: String
    name: String
    githubLogin: String
    githubToken: String
    location: String
    avatar: String
    linkedIn: String
    gitHub:String
    portfolio: String
    bio: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type EventData {
    eventTitle: String
  }

  input EventInput {
    eventTitle: String
    date: String
    eventDescription: String
    eventLink: String
    categories: String
    location: String
    userName: String
  }

  input UserInput {
    linkedIn: String
    gitHub: String
    portfolio: String
    bio: String
  }
`;


module.exports = typeDefs;

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
  }

  type User {
    id: Int
    email: String
    name: String
    githubLogin: String
    githubToken: String
    location: String
    avatar: String
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
`;

module.exports = typeDefs;

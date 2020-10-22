const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    githubLoginUrl: String!
    userData: User
    getUsers: [User]
    getEvents: [EventData]
    getEventByUser(userId: Int!): [EventData]
    getUserLogedIn(userId: Int!): User
    getUser(githubLogin: String!): User
  }

  type Mutation {
    authorizeWithGithub(code: String!): AuthPayload!
    CreateEvent(input: EventInput!): CreateEventResponse!
    DeleteEvent(id_event: Int!): DeleteEventResponse!
    UpdateUserData(input: UpdatedData!): UpdateUserResponse!
  }

  input UpdatedData {
    bio: String
    name: String
    email: String
    gitHub: String
    linkedIn: String
    portfolio: String
    userId: Int!
    userStacks: [String]
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
    gitHub: String
    portfolio: String
    bio: String
    userStacks: [String]
  }

  type UpdateUserResponse {
    response: String
  }

  type CreateEventResponse {
    response: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type EventData {
    id_event: Int!
    title: String
    date: String
    description: String
    link: String
    categories: String
    location: String
    eventLeader: String
    participants: Int
    userId: Int
  }

  input EventInput {
    eventTitle: String
    date: String
    eventDescription: String
    eventLink: String
    categories: String
    location: String
    userName: String
    userId: Int!
  }

  type DeleteEventResponse {
    response: String
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    githubLoginUrl: String!
    me: User
    userData: User
    getUsers: [User]
  }

  type Mutation {
    authorizeWithGithub(code: String!): AuthPayload!
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
`;

module.exports = typeDefs;

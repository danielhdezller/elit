const { gql } = require('apollo-server');

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



module.exports = typeDefs;

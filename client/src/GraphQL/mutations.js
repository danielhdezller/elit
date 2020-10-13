import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
  mutation authorizeWithGithub($code: String!) {
    authorizeWithGithub(code: $code) {
      token
      user {
        githubLogin
        name
        avatar
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_USER_CODE = gql`
  query {
    githubLoginUrl
  }
`;

export const GET_ALL_USERS = gql`
  query {
    getUsers {
      id
      email
      name
      githubLogin
      githubToken
      location
      avatar
  }
}
`

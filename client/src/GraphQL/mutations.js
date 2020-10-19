import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
  mutation authorizeWithGithub($code: String!) {
    authorizeWithGithub(code: $code) {
      token
      user {
        id
        email
        name
        githubLogin
        githubToken
        location
        avatar
      }
    }
  }
`;
export const CREATE_EVENT = gql`
  mutation CreateEvent($input: EventInput!) {
    CreateEvent(input: $input) {
      eventTitle
    }
  }
`;
export const CREATE_USERDATA = gql`
  mutation CreateUserData($input: UserInput!, $id: Int) {
    CreateUserData(input: $input, id: $id) {
      linkedIn
      gitHub
      portfolio
    }
  }
`;

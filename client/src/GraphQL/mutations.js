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
      response
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id_event: Int!) {
    DeleteEvent(id_event: $id_event) {
      response
    }
  }
`;
export const UPDATE_USERDATA = gql`
  mutation CreateUserData($input: UserInput!, $id: Int) {
    CreateUserData(input: $input, id: $id) {
      linkedIn
      gitHub
      portfolio
    }
  }
`;

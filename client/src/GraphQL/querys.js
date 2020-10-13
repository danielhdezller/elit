import { gql } from '@apollo/client';

export const GET_USER_CODE = gql`
  query {
    githubLoginUrl
  }
`;

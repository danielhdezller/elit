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
`;

export const GET_ALL_EVENTS = gql`
  query {
    getEvents {
      id_event
      title
      date
      description
      link
      categories
      location
      eventLeader
      participants
    }
  }
`;

export const GET_USER_EVENTS = gql`
  query getEventByUser($userId: Int!) {
    getEventByUser(userId: $userId) {
      id_event
      title
      date
      description
      link
      categories
      location
      eventLeader
      participants
    }
  }
`;

export const GET_USER_LOGED_IN = gql`
  query getUserLogedIn($userId: Int!) {
    getUserLogedIn(userId: $userId) {
      id
      email
      name
      githubLogin
      githubToken
      location
      avatar
      linkedIn
      gitHub
      portfolio
      bio
    }
  }
`;

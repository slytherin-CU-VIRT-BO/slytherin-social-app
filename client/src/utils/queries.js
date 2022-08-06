import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      username
      firstName
      lastName
      email
      posts {
        postText
        createdAt
        comments {
          commentBody
          username
          createdAt
        }
      }
      friends {
        firstName
        lastName
      }
      friendRequests {
        username
      }
    }
  }
`;

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      firstName
      lastName
      email
      posts {
        postText
        createdAt
        comments {
          commentBody
          username
          createdAt
        }
      }
      friends {
        firstName
        lastName
      }
      friendRequests {
        username
      }
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      username
      firstName
      lastName
      email
      posts {
        postText
        createdAt
        comments {
          commentBody
          username
          createdAt
        }
      }
      friends {
        firstName
        lastName
      }
      friendRequests {
        username
      }
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      postText
      createdAt
      username
      firstName
      lastName
    }
  }
`;

export const GET_POST = gql`
  query posts($username: String!) {
    posts(username: $username) {
      postText
      createdAt
      username
      firstName
      lastName
    }
  }
`;

export const GET_OTHER_USERS = gql`
  query users {
    users(exclude: $username) {
      username
      firstName
      lastName
      email
      posts {
        postText
        createdAt
        comments {
          commentBody
          username
          createdAt
        }
      }
      friends {
        firstName
        lastName
      }
      friendRequests {
        username
      }
    }
  }
`;

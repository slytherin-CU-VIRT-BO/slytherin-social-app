import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const GET_ME  = gql`
    {
        me {
            firstName
            lastName
            email
            password
            posts {
                postText
                createdAt
                likes
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
        }
    }
`;

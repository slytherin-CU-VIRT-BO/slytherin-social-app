import { gql } from "@apollo/client";

export const GET_ME  = gql`
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

export const GET_USER  = gql`
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

export const GET_POSTS = gql`
    query posts($username: String!) {
        posts(username: $username) {
            postText
            createdAt
            username
            firstName
            lastName
        }
    }
`

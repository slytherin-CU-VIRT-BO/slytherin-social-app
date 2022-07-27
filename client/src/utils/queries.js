import { gql } from "@apollo/client";

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

export const GET_POSTS = gql`
    query posts($username: String) {
        posts(username: $username) {
            postText
            createdAt
            firstName
            lastName
            likes
            comments
        }
    }
`

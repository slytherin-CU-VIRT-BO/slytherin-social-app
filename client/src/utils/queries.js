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

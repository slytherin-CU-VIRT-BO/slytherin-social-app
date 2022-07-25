const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        friendCount: Int
        friends: [User]
        posts: [Post]
    }

    type Post {
        _id: ID
        postText: String
        createdAt: String
        firstName: String
        lastName: String
        commentsCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String
        firstName: String
        lastName: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        
    }

    type Mutation {

    }
`;

module.exports = typeDefs;
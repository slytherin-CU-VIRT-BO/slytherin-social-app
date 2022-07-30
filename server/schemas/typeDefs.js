const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    friendCount: Int
    friends: [User]
    friendRequests: String
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
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser(username: String, password: String): User
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
    sendFriendRequest(friendId: ID!): User
    rejectFriendRequest(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;

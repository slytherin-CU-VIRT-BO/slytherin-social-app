const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Query to get the current logged in user
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('posts')
                .populate('friends');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          // Query to get all users
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('posts')
              .populate('friends');
          },
          // Query to find a user based off their username
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('friends')
              .populate('posts');
          },
          // Query to get the sorted posts from a user
          posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
          },
          // Query to get a single post by it's id
          post: async (parent, { _id }) => {
            return Post.findOne({ _id });
          }
    },
    Mutation: {
        // Create a user. Ideally this is done from the sign up.
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        // User an email and password to sign in a user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        
    }
}

module.exports = resolvers;

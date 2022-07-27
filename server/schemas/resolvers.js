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
        // Use an email and password to sign in a user
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
        // Add a post as a User
        addPost: async(parent, args, context) => {
          // Check the user is logged in
          if (context.user) {
            const post = await Post.create({ ...args, username: context.user.username });
            // Create the post using context and args
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { posts: post._id } },
              { new: true }
            );
    
            return post;
          }
    
          throw new AuthenticationError('You need to be logged in!');
        },
        // Adds a comment to a post by taking the post's id
        addComment: async (parent, { postId, commentBody }, context) => {
          // Check the user is logged in
          if(context.user) {
            const updatedPost = await Post.findOneAndUpdate(
              { _id: postId },
              // Uses the postId to add a comment into the posts comments array
              // The information pushed in is the comment's text and the username 
              // of the user who is currently logged in via context.
              { $push: { comments: { commentBody, username: context.user.username } } },
              { new: true, runValidators: true }
            )

            return updatedPost;
          }
          
          throw new AuthenticationError('You need to be logged in!');
        }
      }
    }


module.exports = resolvers;

const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
        type: String,
        required: true
    },
    likes: {
        type: Integer
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('commentsCount').get(function() {
    return this.comments.length;
  });
  
  const Post = model('Post', postSchema);
  
  module.exports = Post;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    firstName: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    lastName: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    friendRequests: [
      // The string will be of the incoming user's username
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

  userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
  })

  const User = model('User', userSchema);
  
  module.exports = User;
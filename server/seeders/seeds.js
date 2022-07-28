const userSeeds = require('./userSeed.json');
const postSeeds = require('./postSeed.json');
const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
    try {
        // If running seeds, clear anything else in the database to allow a 'pure' seeding
        await User.deleteMany({});
        await Post.deleteMany({});
        // Create users based off the json list from userSeeds
        await User.create(userSeeds);

        for(let i = 0; i < postSeeds.length; i++) {
            const { _id, postAuthor } = await Post.create(postSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: postAuthor },
                {
                    $addToSet: {
                        posts: _id
                    }
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
});


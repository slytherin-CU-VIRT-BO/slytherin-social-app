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
            // Generate a random number to add a random user as a friend to the current user being seeded
            const randomUserInt = Math.floor(Math.random() * i);
            const randomUser = userSeeds[randomUserInt];
            const test = await User.findOne({username: randomUser.username});
            console.log(test)
            const { _id, username } = await Post.create(postSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: username },
                {
                    $addToSet: {
                        posts: _id,
                        friends: test._id
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


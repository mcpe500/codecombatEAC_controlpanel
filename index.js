const { batch1, batch2, batch3, batch4 } = require("./batch.json");

const express = require('express');
const app = express();
const { MongoClient, BSON } = require('mongodb');

const { mongoURI, databaseName, collectionName } = require("./env.json")
// const mongoURI = 'mongodb://54.164.88.26:27017';
// const databaseName = 'coco';
// const collectionName = 'users';

console.log('Program start');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cheatLevelsTo81', async (req, res) => {
    const { username } = req.body;
    await cheatLevelsTo81(username.split(" "));
    // const usernames = username.split(" ");
    // for (let i = 0; i < usernames.length; i++) {
    //     await cheatLevelsTo81(usernames[i]);
    // }
    return res.send("Cheat levels to 81 completed.");
});

app.post('/addGems', async (req, res) => {
    const { username, tambahGems } = req.body;
    const usernames = username.split(" ");
    await addGems(usernames, tambahGems);
    // Call the addGems function with the provided username and gem amount
    // for (let i = 0; i < usernames.length; i++) {
    //     await addGems(usernames[i], tambahGems);
    // }
    return res.send("Gems added successfully.");
});

app.post('/removeGems', async (req, res) => {
    const { username, kurangGems } = req.body;
    // Call the removeGems function with the provided username and gem amount to remove
    const usernames = username.split(" ");
    await removeGems(usernames, kurangGems);
    // for (let i = 0; i < usernames.length; i++) {
    //     await removeGems(usernames[i], kurangGems);
    // }

    return res.send("Gems removed successfully.");
});

app.post('/openLevelBatch1', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch1 function with the provided username
    const usernames = username.split(" ");
    await openLevelBatch1(usernames);
    // for (let i = 0; i < usernames.length; i++) {
    //     await openLevelBatch1(usernames[i]);
    // }
    return res.send("Opened Level Batch 1 for the user.");
});

app.post('/openLevelBatch2', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch2 function with the provided username
    const usernames = username.split(" ");
    await openLevelBatch2(usernames);
    // for (let i = 0; i < usernames.length; i++) {
    //     await openLevelBatch2(usernames[i]);
    // }
    return res.send("Opened Level Batch 2 for the user.");
});

app.post('/openLevelBatch3', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch2 function with the provided username
    const usernames = username.split(" ");
    await openLevelBatch3(usernames);
    // for (let i = 0; i < usernames.length; i++) {
    //     await openLevelBatch3(usernames[i]);
    // }
    return res.send("Opened Level Batch 3 for the user.");
});

app.post('/openLevelBatch4', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch2 function with the provided username
    const usernames = username.split(" ");
    await openLevelBatch4(usernames);
    // for (let i = 0; i < usernames.length; i++) {
    //     await openLevelBatch4(usernames[i]);
    // }
    return res.send("Opened Level Batch 4 for the user.");
});

app.post('/resetPlayer', async (req, res) => {
    const { username } = req.body;
    // Call the resetPlayer function with the provided username
    const usernames = username.split(" ");
    await reserPlayer(usernames);
    // for (let i = 0; i < usernames.length; i++) {
    //     await resetPlayer(usernames[i]);
    // }
    return res.send("Player reset successfully.");
});

app.get('/getAllPlayer', async (req, res) => {
    const { username } = req.query;
    // Call the resetPlayer function with the provided username
    const usernames = username.split(" ");
    let playerObj = [];
    for (let i = 0; i < usernames.length; i++) {
        playerObj = await getAllPlayers(usernames[i]);
    }
    return res.send(JSON.stringify(playerObj));
});

app.post('/clearLeaderboard', async (req, res) => {
    const { levelName } = req.body;
    // Call the clearLeaderboard function with the provided level name
    const levelNames = username.split(" ");
    for (let i = 0; i < levelNames.length; i++) {
        await clearLeaderboard(levelNames[i]);
    }
    return res.send("Leaderboard cleared successfully.");
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

async function cheatLevelsTo81(username) {
    try {
        console.log(username);
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                user.points = new BSON.Int32(1000000000);

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }

        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function addGems(username, tambahGems) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            // console.log('User:');
            // console.log(user);
            let resultgems = 0;
            if (user) {
                // Modify the user object
                // user.earned.gems = new BSON.Int32(100000000);
                let earnedGems = 0;
                if (user.earned) {
                    if (user.earned.gems) {
                        earnedGems = user.earned.gems;
                    }
                }
                earnedGems = earnedGems + parseInt(tambahGems);
                if (!user.earned) {
                    user.earned = { gems: new BSON.Int32(earnedGems) };

                } else {
                    user.earned.gems = new BSON.Int32(earnedGems);
                }
                resultgems = earnedGems;

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                // console.log('Update result:');
                // console.log(updateResult);
            }
            client.close();
            console.log('Connection closed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function removeGems(username, kurangGems) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                let earnedGems = 0;
                if (user.earned) {
                    if (user.earned.gems) {
                        earnedGems = user.earned.gems;
                    }
                }
                earnedGems = earnedGems - parseInt(kurangGems);

                if (!user.earned) {
                    user.earned = { gems: new BSON.Int32(earnedGems) };

                } else {
                    user.earned.gems = new BSON.Int32(earnedGems);
                }

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
            client.close();
            console.log('Connection closed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


async function openLevelBatch1(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: [i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                // user.points = new BSON.Int32(100000000);
                user.earned.levels = batch1;

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }
        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function openLevelBatch2(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                user.earned.levels = batch2;

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }
        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


async function openLevelBatch3(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                user.earned.levels = batch3;

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }
        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function openLevelBatch4(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                user.earned.levels = batch4;

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }
        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// const levels = {
//     "level1": 0,
//     "level2": 23,
//     "level3": 50
// }

// async function modifyPoint(username, level) {
//     try {
//         const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         console.log('Connected to MongoDB');

//         const db = client.db(databaseName);
//         const collection = db.collection(collectionName);

//         const user = await collection.findOne({ name: { $regex: username } });
//         console.log('User:');
//         console.log(user);

//         if (user) {
//             // Modify the user object
//             user.points = new BSON.Int32(level);

//             // Update the user object in the database
//             const updateResult = await collection.updateOne(
//                 { _id: user._id },
//                 { $set: user }
//             );
//             console.log('Update result:');
//             console.log(updateResult);
//         }

//         client.close();
//         console.log('Connection closed');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

async function resetPlayer(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        for (let i = 0; i < username.length; i++) {
            const user = await collection.findOne({ name: { $regex: username[i] } });
            console.log('User:');
            console.log(user);

            if (user) {
                // Modify the user object
                user.spent = 0;

                if (!user.purchased) {
                    user.purchased = {};
                }

                if (!user.purchased.items) {
                    user.purchased.items = [];
                }

                if (!user.earned) {
                    user.earned = {};
                }

                if (!user.earned.items) {
                    user.earned.items = [];
                }

                if (!user.earned.heroes) {
                    user.earned.heroes = [];
                }

                if (!user.heroConfig) {
                    user.heroConfig = {};
                }

                if (!user.heroConfig.inventory) {
                    user.heroConfig.inventory = {};
                }

                // Update the user object in the database
                const updateResult = await collection.updateOne(
                    { _id: user._id },
                    { $set: user }
                );
                console.log('Update result:');
                console.log(updateResult);
            }
        }
        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
async function deletePlayer(username) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        const user = await collection.findOne({ name: { $regex: username } });
        console.log('User:');
        console.log(user);

        if (user) {
            // Delete the user object from the database
            const deleteResult = await collection.deleteOne({ _id: user._id });
            console.log('Delete result:');
            console.log(deleteResult);
        }

        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
async function getAllPlayers(contained) {
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        const query = { name: { $regex: contained } };
        const players = await collection.find(query).toArray();
        console.log('Players:');
        console.log(players);

        client.close();
        console.log('Connection closed');
        return players;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return [];
    }
}

async function clearLeaderboard(levelName) {
    console.log(levelName);
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('coco');
        const collection = db.collection('level.sessions');

        const deleteResult = await collection.deleteMany({ levelID: levelName });

        console.log('Delete result:');
        console.log(deleteResult);

        client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}



// cheatGems(0);
// cheatLevels();
// openLevelBatch1("testuser5");
// openLevelBatch2("");
// cheatLevelsTo81("testuser0");
// addGems("testuser0", 1000000)
// removeGems("testuser3",100000000)
// modifyPoint("testuser5", 1000000000)
// resetGems("testuser1");
// let ladderNames = ["cavern-survival","dueling-grounds","multiplayer-treasure-grove"]
// clearLeaderboard(ladderNames[0]);




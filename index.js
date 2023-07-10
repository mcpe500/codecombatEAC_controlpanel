const batch1 = [
    "54173c90844506ae0195a0b4",
    "54174347844506ae0195a0b8",
    "54ca592de4983255055a5478",
    "54cfc6e2d06e8152051eb8a4",
    "541875da4c16460000ab990f",
    "54527a6257e83800009730c7",
    "544a98f62d002f0000fe331a",
    "5418aec24c16460000ab9aa6",
    "5452972f57e83800009730de",
    "580aaafe990e3e1f00bde535",
    "545287ef57e83800009730d5",
    "54caa542e1bd9a4f054648b0",
    "57aa1bd5e5636725008854c0",
    "55ca293b9bc1892c835b0136",
    "5604169b60537b8705386a59",
    "54d4fbb571f9c75605f48cab",
    "54dbd516c81bd84f0580eb72",
    "565ce2291b940587057366dd",
    "5418cf256bae62f707c7e1c3",
    "577bd1aad2429735002ec11e",
    "545a5914d820eb0000f6dc0a",
    "5418d40f4c16460000ab9ac2",
    "54d24c49bf87255405a8f834",
    "5452adea57e83800009730ee",
    "5452a84d57e83800009730e4",
    "5418b9d64c16460000ab9ab4",
    "54e0cdefe308cb510555a7f5",
    "5452c3ce57e83800009730f7",
    "54e8e4047578d754057f852b",
    "579ff2dc9872641f0080fdbb",
    "54f0e074a375e47f055d619c",
    "57a0ca57f380c44400809a08",
    "541b24511ccc8eaae19f3c1f",
    "541b288e1ccc8eaae19f3c25",
    "55ca29439bc1892c835b0137",
    "574b6ef42f39f92500d7c602",
    "5452cfa706a59e000067e4f5",
    "558c3967fa305a734ad31df3",
    "541b434e1ccc8eaae19f3c33",
    "541c9a30c6362edfb0f34479",
    "5452d8b906a59e000067e4fa",
    "541b67f71ccc8eaae19f3c62",
    "5578843e5cda3d8905654190",
    "57631f015c84de2900c16e96",
    "578e667ea1d67529004601b5",
    "57ba850b054cbb2a005d8196",
    "57ba8b472048774c002a12ac"
]

const batch2 = [
    "54173c90844506ae0195a0b4",
    "54174347844506ae0195a0b8",
    "54ca592de4983255055a5478",
    "54cfc6e2d06e8152051eb8a4",
    "541875da4c16460000ab990f",
    "54527a6257e83800009730c7",
    "544a98f62d002f0000fe331a",
    "5418aec24c16460000ab9aa6",
    "5452972f57e83800009730de",
    "580aaafe990e3e1f00bde535",
    "545287ef57e83800009730d5",
    "54caa542e1bd9a4f054648b0",
    "57aa1bd5e5636725008854c0",
    "55ca293b9bc1892c835b0136",
    "5604169b60537b8705386a59",
    "54d4fbb571f9c75605f48cab",
    "54dbd516c81bd84f0580eb72",
    "565ce2291b940587057366dd",
    "5418cf256bae62f707c7e1c3",
    "577bd1aad2429735002ec11e",
    "545a5914d820eb0000f6dc0a",
    "5418d40f4c16460000ab9ac2",
    "54d24c49bf87255405a8f834",
    "5452adea57e83800009730ee",
    "5452a84d57e83800009730e4",
    "5418b9d64c16460000ab9ab4",
    "54e0cdefe308cb510555a7f5",
    "5452c3ce57e83800009730f7",
    "54e8e4047578d754057f852b",
    "579ff2dc9872641f0080fdbb",
    "54f0e074a375e47f055d619c",
    "57a0ca57f380c44400809a08",
    "541b24511ccc8eaae19f3c1f",
    "541b288e1ccc8eaae19f3c25",
    "55ca29439bc1892c835b0137",
    "574b6ef42f39f92500d7c602",
    "5452cfa706a59e000067e4f5",
    "558c3967fa305a734ad31df3",
    "541b434e1ccc8eaae19f3c33",
    "541c9a30c6362edfb0f34479",
    "5452d8b906a59e000067e4fa",
    "541b67f71ccc8eaae19f3c62",
    "5578843e5cda3d8905654190",
    "57631f015c84de2900c16e96",
    "578e667ea1d67529004601b5",
    "57ba850b054cbb2a005d8196",
    "57ba8b472048774c002a12ac",
    "5446cb40ce01c23e05ecf027",
    "576daea7f2f0df36001c9f1c",
    "54c6eb5bdaee655705c4903f",
    "582f37b994ac921f002a030c",
    "576d9ed701d8dd2e00963936",
    "577a8ad935ea2e240036f78a",
    "58deb6f1b9f39b2e00b4257c",
    "582b8d390ac0a11f0009af13",
    "5487330d84f7b4dac246d440",
    "54b363307961bdef1c751988",
    "57698793c10c132f00a0eb68",
    "576822550228801f0024c7eb",
    "5448330517d7283e051f9b9e",
    "54b3591c7961bdef1c751977",
    "546e91b8a4b7840000ee92dc",
    "575f467217440824004fde04",
    "576dbc10e1ea5d1f00887fa6",
    "54bbeb9f2542125305f07044",
    "5456b3c8d5ada30000525605",
    "5456bb8dd5ada30000525613",
    "590fa5d6b31824370027ce18",
    "54b361697961bdef1c751985",
    "5447030525cce60000745e2a",
    "562fb9f5c0fcbd86057b8cd9",
    "54eeed2f8f031352052adbe0",
    "5442ba0e1e835500007eb1c7",
    "54b83c4829843994803c8390",
    "55144b509f0c4854051769c1",
    "568c2687f9563045007bb6d8",
    "581a66ad6ff06a2000d697e8",
    "5459570bb4461871053292f5",
    "5470001860f6cc376131525d",
    "54c6ae6475679bbd0f383e77",
    "5470b98ceb739dbc9d2402c7",
    "57a37339161e7d20002d82e0",
    "5470ca33eb739dbc9d2402ee",
    "57a3d12b89fd5a24006453d4",
    "54701f7860f6cc37613152a1",
    "545ec477e7f60fd6c55760e9",
    "566765a549fc122e001df32a",
    "5470291c60f6cc37613152d1",
    "5470d013eb739dbc9d240323",
    "545edba9e7f60fd6c5576133",
    "5776e1f55cefe85c008b896c",
    "5654b35c8b2ec1870555ee9c",
    "56e8626aecba2725002547fb",
    "556772755c27898a051398db",
    "54ac1d4865a9d9b862643853",
    "578d5ec05c86b21f00820e94",
    "5787f695d495562500f22329",
    "54c7b653d517a56707ac4342",
    "57b0b3a68a0d832000e0859f",
    "5795070ce0ab2d26009eb815",
    "57b0bf2b56814d2500b84acb",
    "5789166332a13a1f005e8ac0",
    "5703d8007cd2381f00d95984",
    "57152437af04592000698f28",
    "57ad9cbe1d791b200005478f",
    "56f0482f8b4a192400473747",
    "56f1b44cb4799ca2005dea75",
    "573622cfaad7ed21002aff85",
    "56fc56ac7cd2381f00d758b4",
    "58ee003a3683d82e000d43f1",
    "57b0501b9c524e24004bb0db",
    "57b14f822e1d7f2000aaddf8",
    "57b2a65d7583a91f00ac98fa",
    "56f09a6a1dbb2f4700e87573",
    "576965635d4a5f590042d842",
    "56fd7e2c9026fb240057103c",
    "56ccc820d9fb1c250039a124",
    "5705b1a6a904662500f23e69",
    "57926929aff3762500cd5898",
    "57b40d4a1fb6db20004d39e2",
    "57ae02ef9c524e24004a982d",
    "57b6b13a42fbc844002b11ff",
    "57f4dea3849cb124001e69a9",
    "57ba85deb11ac324001243e7",
    "57f5de857ae3772e00ba23a9",
    "57bd45b84c52502400faee47",
    "57bec521a796322500e290ec",
    "57bbe5f58a4d3d4500962f4a",
    "5922c3d8c68f90002f8c04c3",
    "57c3d3aad924125b00d65bdd",
    "56955f09efb7a92400fcc2da",
    "571169879b0fdf2400175423",
    "57fdcfdda9ff402500b73b1c",
    "57116b4ff81a322500e71480",
    "57ff20f8b75fca21000251d0",
    "57905f5c223c2e250084c930",
    "58008e538b0a3c2900addaae",
    "578f1e1f637778350062fb23",
    "59758552126ffc002c662b9f",
    "5791c20bcbf7c6200034ad4c",
    "571a972ba88b162400c668a3",
    "5795e151aff3762500d05906",
    "579af675563faa25008e45d6",
    "57a182c58a46aa2000823210",
    "579ee4daf380c444007c8022",
    "57a33544161e7d20002ccfdf",
    "57a8103979a0664400120db1",
    "57a44f756254c62500592700",
    "5829e67bb9bce324006069e9",
    "57984cbbff77551f009ffb46",
    "571800916d3e2720000ea0ad",
    "571e9d11a88b162400c757c6",
    "5799b731b468cc25007f91ea",
    "571d7353c3bb5863006909b2",
    "56e85c040c6e9f1f009861f3",
    "571fb930860f4d20004de89a",
    "5727f5cd113c2d2500df87da",
    "57862f8ea6c64135009089e3",
    "545bb1181e649a4495f887df",
    "57c49d577145332900f52045",
    "57c4bb231ceb8c20000449a1",
    "57879f1c24a2401f0049267c",
    "5462491c688f333d05d8af38",
    "54626472f3c64b7b0598590c",
    "54b45d45f0ace6560ab7fa14",
    "54626f270cacde3f055434ac",
    "54af3864956a2e58059c2215",
    "561d64faccb78c84055763d7",
    "562101bf175b7286057ee23b",
    "54b591e553b18557057a38b1",
    "546283ddfdd66af405fa8209",
    "5469643c37600b40e0e09c5b",
    "54712072eb739dbc9d24034b",
    "544437e0645c0c0000c3291d",
    "54b71118a969b8ec07109b57",
    "5480b62e1bf0b10000711c59",
    "5480b9d01bf0b10000711c5f",
    "55d4b3b4777137aeec7ccd23",
    "54b4f8f3d607f0663a9ae9ea",
    "54b66deb26f3d652051a957b",
    "54b866420798d452054d5993",
    "54b174f85571fb53059f0207",
    "54b611288f3ce555059d986d"
]

const express = require('express');
const app = express();
const { MongoClient, BSON } = require('mongodb');

const mongoURI = 'mongodb://54.164.88.26:27017';
const databaseName = 'coco';
const collectionName = 'users';

console.log('Program start');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cheatLevelsTo81', async (req, res) => {
    const { username } = req.body;
    const usernames = username.split(" ");
    for (let i = 0; i < usernames.length; i++) {
        await cheatLevelsTo81(usernames[i]);
    }
    return res.send("Cheat levels to 81 completed.");
});

app.post('/addGems', async (req, res) => {
    const { username, tambahGems } = req.body;
    const usernames = username.split(" ");
    // Call the addGems function with the provided username and gem amount
    for (let i = 0; i < usernames.length; i++) {
        await addGems(usernames[i], tambahGems);
    }
    return res.send("Gems added successfully.");
});

app.post('/removeGems', async (req, res) => {
    const { username, kurangGems } = req.body;
    // Call the removeGems function with the provided username and gem amount to remove
    const usernames = username.split(" ");
    for (let i = 0; i < usernames.length; i++) {
        await removeGems(usernames[i], kurangGems);
    }

    return res.send("Gems removed successfully.");
});

app.post('/openLevelBatch1', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch1 function with the provided username
    const usernames = username.split(" ");
    for (let i = 0; i < usernames.length; i++) {
        await openLevelBatch1(usernames[i]);
    }
    return res.send("Opened Level Batch 1 for the user.");
});

app.post('/openLevelBatch2', async (req, res) => {
    const { username } = req.body;
    // Call the openLevelBatch2 function with the provided username
    const usernames = username.split(" ");
    for (let i = 0; i < usernames.length; i++) {
        await openLevelBatch2(usernames[i]);
    }
    return res.send("Opened Level Batch 2 for the user.");
});

// app.post('/modifyPoint', async (req, res) => {
//     const { username, level } = req.body;
//     // Call the modifyPoint function with the provided username and new level
//     const usernames = username.split(" ");
//     for (let i = 0; i < usernames.length; i++) {
//         await modifyPoint(usernames[i], level);
//     }
//     return res.send("Point modified successfully.");
// });

app.post('/resetPlayer', async (req, res) => {
    const { username } = req.body;
    // Call the resetPlayer function with the provided username
    const usernames = username.split(" ");
    for (let i = 0; i < usernames.length; i++) {
        await resetPlayer(usernames[i]);
    }
    return res.send("Player reset successfully.");
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

        const user = await collection.findOne({ name: { $regex: username } });
        console.log('User:');
        console.log(user);

        if (user) {
            // Modify the user object
            user.points = new BSON.Int32(100000000);

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

        const user = await collection.findOne({ name: { $regex: username } });
        console.log('User:');
        console.log(user);

        if (user) {
            // Modify the user object
            // user.earned.gems = new BSON.Int32(100000000);
            let earnedGems = user.earned.gems;
            earnedGems = earnedGems + tambahGems;
            user.earned.gems = new BSON.Int32(earnedGems);

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

        const user = await collection.findOne({ name: { $regex: username } });
        console.log('User:');
        console.log(user);

        if (user) {
            // Modify the user object
            let earnedGems = user.earned.gems;
            earnedGems = earnedGems - kurangGems;
            user.earned.gems = new BSON.Int32(earnedGems);

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

        const user = await collection.findOne({ name: { $regex: username } });
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

        const user = await collection.findOne({ name: { $regex: username } });
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

async function modifyPoint(username, level) {

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
            // Modify the user object
            user.points = new BSON.Int32(level);

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
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function reserPlayer(username) {
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
            // Modify the user object
            user.spent = 0;
            user.purchased.items = [];
            user.earned.items = [];
            user.earned.heroes = [];
            user.heroConfig.inventory = {};
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
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
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




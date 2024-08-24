
const { MongoClient, ServerApiVersion } = require('mongodb');

const configJson = require('../../config/configEnv');

const uri = "mongodb+srv://" + configJson.DB_ID + ":" + configJson.DB_PW + configJson.DB_CLUSTER + "/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }

});

async function run() {
    await client.connect();
}
run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

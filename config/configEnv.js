const path = require('path');
const APP = path.parse(__filename).name;


const configFile = './json/' + APP + '.json';
const config = require(configFile);

const DB_ID = config.db_client.id;
const DB_PW = config.db_client.pw;
const DB_CLUSTER = config.db_client.cluster;


const conf = {
    DB_ID,
    DB_PW,
    DB_CLUSTER
}

module.exports = conf;
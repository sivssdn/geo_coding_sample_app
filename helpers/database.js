'use strict';

const path = require('path');
const dotenv = require('dotenv');
const MongoClient = require("mongodb").MongoClient;

dotenv.config({
    path: __dirname + path.sep + ".." + path.sep + ".env"
});

const MONGO_URL = "mongodb://"+process.env.DB_HOST+":27017/"+process.env.DB;


module.exports = {
    MONGO_URL: MONGO_URL,
    MongoConnection: function () {
        return MongoClient.connect(MONGO_URL)
    },

};
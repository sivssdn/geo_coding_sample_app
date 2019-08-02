'use strict';
const NodeGeocoder = require('node-geocoder');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: __dirname + path.sep + ".." + path.sep + ".env"
});


const options = {
    provider: 'opencage',
    httpAdapter: 'https',
    apiKey: process.env.OCD_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = {
    getCoordinates: function (placeName) {
        return geocoder.geocode(placeName);
    }
};
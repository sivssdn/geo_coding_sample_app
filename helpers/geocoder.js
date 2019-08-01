'use strict';
const NodeGeocoder = require('node-geocoder');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: __dirname + path.sep + ".." + path.sep + ".env"
});


const options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODING_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = {
    getCoordinates: function (placeName) {
        return new Promise((resolve, reject) => {resolve(1)});
        //return geocoder.geocode(placeName);
    }
};
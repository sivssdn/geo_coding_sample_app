'use strict';

const MongoClient = require("../helpers/database").MongoConnection;
const GeoCoder = require("../helpers/geocoder");

const storeLocation = {
    getCoordinates: function (placeName) {
        return GeoCoder.getCoordinates(placeName);
    },
    getNearestStore: function (placeName) {
        return this.getCoordinates(placeName)
                    .then(location => {


                        // let latitude = location[0].latitude;
                        // let longitude = location[0].longitude;
                        // let latitude = 48.1949526;
                        // let longitude = 16.3431347;
                        let latitude = 48.1682608;
                        let longitude = 16.2567616;

                        return MongoClient().then(function (db, error) {
                            if (error) throw error;

                            return db.collection("storeLocations").findOne({
                                "geometry": {
                                    "$geoIntersects": { "$geometry": { "type": "Point", "coordinates": [ longitude, latitude ] } }
                                }
                            });

                    })
                    .catch((err) => {
                        console.log(err);
                        return {"error": err}
                    });

        });
    }

};

module.exports = storeLocation;


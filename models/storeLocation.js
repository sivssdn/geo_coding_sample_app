'use strict';

const MongoClient = require("../helpers/database").MongoConnection;
const GeoCoder = require("../helpers/geocoder");

const storeLocation = {
    /*
    * gets lat long from a given place name
    * */
    getCoordinates: function (placeName) {
        return GeoCoder.getCoordinates(placeName);
    },
    /*
    * searches mongodb against the coordinated received from the this.getCoordinates() to find a suitable match
    * */
    getNearestStore: function (placeName) {
        return this.getCoordinates(placeName)
                    .then(location => {

                        let latitude = 0;
                        let longitude = 0;

                        if(location.length > 0){
                            latitude = location[0].latitude;
                            longitude = location[0].longitude;
                        }

                        //for testing some cases
                        // let latitude = 48.1682608;
                        // let longitude = 16.2567616;
                        // let latitude = 0;
                        // let longitude = 0;

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


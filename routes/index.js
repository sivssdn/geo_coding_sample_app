const express = require('express');
const router = express.Router();
const storeLocation = require("../models/storeLocation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Store Location' });
});

router.post('/get-store', function(req, res, next) {

  storeLocation.getNearestStore(req.body.location_name)
      .then((storeDetails) => {
          if(storeDetails != null) {

              res.json({storeName: storeDetails.Name});
          }else{
              res.json({storeName: "Not Found"});
          }
      })
      .catch((err) => {
          console.log(err);
          res.json({"error": "Something unexpected happened"});
      });

});

module.exports = router;

const express = require('express');
const router = express.Router();
const storeLocation = require("../models/storeLocation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Store Location' });
  //res.redirect('/UserHomePage');
});

router.post('/get-store', function(req, res, next) {

  storeLocation.getNearestStore(req.body.location_name)
      .then((storeDetails) => {
        res.json({storeName: storeDetails.Name});
      })
      .catch((err) => {
        res.json({"error": "something unexpected happened"});
      });

});

module.exports = router;

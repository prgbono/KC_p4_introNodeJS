var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ads');

// GET /api/ads
router.get('/', function(req, res, next){
  Ad.find((err, res) => {
    if (err) {
      return next (err);
    }
    res.json(res)
  });
});

module.exports = router;
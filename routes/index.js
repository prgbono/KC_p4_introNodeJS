var express = require('express');
var router = express.Router();

const Ad = require('./../models/Ad');
const asyncHandler = require('express-async-handler');

/* GET / -> homePage */
router.get('/', asyncHandler(async function(req, res, next) {
  res.locals.ads = await Ad.find();
  res.render('index', { title: 'NodePop' });
}));

module.exports = router;
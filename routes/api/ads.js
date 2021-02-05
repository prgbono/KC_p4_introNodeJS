var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ad');
const asyncHandler = require('express-async-handler');

// GET /api/ads -> List ads
router.get('/', asyncHandler(async function(req, res){  

  const isType = req.query.isType;
  // const filterByName = req.query.filterByName;
  // const filterByTags = req.query.filterByTags;
  // const filterByPrice = req.query.filterByPrice;

  const filter = {};
  if (isType) {filter.isType = isType};
  // if (filterByName) {filter.filterByName = filterByName}
  // if (filterByTags) {filter.filterByTags = filterByTags}
  // if (filterByPrice) {filter.filterByPrice = filterByPrice}

  // const response = await Ad.find();
  const response = await Ad.list(filter);
  res.json(response);
}));

// POST /api/ads (body)
router.post('/', asyncHandler(async (req, res) => {
  const adData = req.body;
  const ad = new Ad(adData);
  const adCreated = await ad.save();
  res.status(201).json({ result: adCreated });
}));

// PUT /api/ads:id (body)
router.put('/:id', asyncHandler(async (req, res) =>{
  const _id = req.params.id;
  const adData = req.body;
  const updatedAd = await Ad.findOneAndUpdate({ _id }, adData, {
    new: true, // otherwise it doesn't retrieve the updated document
    useFindAndModify: false
  });

  if (!updatedAd) {
    return res.status(404).json({error: 'not found'});
  }

  res.json({ result: updatedAd}); 
}));

// DELETE /api/ads:id 
router.delete('/:id', asyncHandler(async(req, res, next) =>{
  const _id = req.params.id;
  await Ad.deleteOne({ _id }); // === { _id: _id}
  res.json();
}));

//TODO:
// GET /api/ad:id
// router.get('/:id', async (req, res, next) => {
//   try {
//     const _id = req.params.id;

//     const agente = await Agente.findOne({ _id: _id });

//     if (!agente) {
//       return res.status(404).json({ error: 'not found' });
//     }
//     res.json({ result: agente });

//   } catch (err) {
//     next(err);
//   }
// });


module.exports = router;
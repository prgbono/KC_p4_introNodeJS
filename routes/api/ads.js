var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ad');
const asyncHandler = require('express-async-handler');
// Reason of using this library -> Try-catch unhandled exceptions -> https://zellwk.com/blog/async-await-express/

// GET /api/ads
router.get('/', asyncHandler(async function(req, res){  
  const response = await Ad.find();
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
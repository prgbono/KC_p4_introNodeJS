var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ad');

// GET /api/ads
router.get('/', async function(req, res, next){  
  //TODO: tratar este try-catch con async-handler o async-error
  try {
    const response = await Ad.find();
    res.json(response);
  }
  catch (err){
    console.log('catch error: ', err);
    next(err)
  }
});

// POST /api/ads
router.post('/', async (req, res, next) => {
  try {
    const adData = req.body;
    console.log('body: ', adData);
    const ad = new Ad(adData);
    console.log('ad: ', ad);
    const adCreated = await ad.save();
    console.log('adCreated: ', adCreated);
    res.status(201).json({ result: adCreated });
  } 
  catch (error) {
    next(error);
  }
});

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
'use strict';

const mongoose = require('mongoose');

// Schema
const adSchema = mongoose.Schema({
  name: {
  	type: String,
  	trim: true,
  	required: true
  },
  description: {
  	type: String,
  	trim: true,
  	required: true
  },
  isType: {
    type: String,
    enum: ["vende", "busca"],
  	required: true
	},
  price: {
    type: Number,
	},
  image: {
    type: String,
  },    
  tags: {
    type: String,
    enum: ["work", "lifestyle", "motor", "mobile"]
	},

  //TODO: test 
  // name, description: {
  // 	type: String,
  // 	trim: true,
  // 	required: true
  // },
}, {
  collection: 'anuncios'
});

// Model
const Ad = mongoose.model('Ad', adSchema);

// Export model
module.exports = Ad;


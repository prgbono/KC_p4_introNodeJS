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
  	// TODO: Test all validations and also if this is not required
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
	}
}, {
  collection: 'anuncios'
});

// Model
const Ad = mongoose.model('Ad', adSchema);

// Export model
module.exports = Ad;


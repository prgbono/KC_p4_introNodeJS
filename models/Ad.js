'use strict';

const mongoose = require('mongoose');

// Schema
const adSchema = mongoose.Schema({
  name: {
  	type: String,
  	trim: true,
    required: true,
    index: true
  },
  description: {
  	type: String,
  	trim: true,
  	// TODO: Test all validations and also if this is not required
  },
  isType: {
    type: String,
    // TODO: Validaciones a objetos enum....
    enum: ["vende", "busca"],
    required: true,
    index: true
	},
  price: {
    type: Number,
	},
  image: {
    type: String,
  },    
  tags: {
    type: [String],
    // TODO: Let new tags?
    // enum: ["work", "lifestyle", "motor", "mobile"]
	}
}, {
  collection: 'anuncios'
});

// adSchema.statics.list = function(filtro, limit, skip, fields, sort) {
adSchema.statics.list = function(filter) {
  // Don't use arrow functions on Mongoose methods
  console.log('WE ARE IN STATICS LIST OF MODEL, filter: ', filter);
  const query = Ad.find(filter);
  // query.limit(limit);
  // query.skip(skip);
  // query.select(fields);
  // query.sort(sort);
  return query.exec();
}

// Model
const Ad = mongoose.model('Ad', adSchema);

// Export model
module.exports = Ad;


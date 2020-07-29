const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
  name: {
    type: String,
    required: true,
    min: 4
  },
  telepone: {
    type: String,
    required: true,
    min: 7
  },
  description: {
    type: String,
    min: 10,
    max: 1024,
    required: true
  },
  addresses: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports =  mongoose.model('Product', productSchema);
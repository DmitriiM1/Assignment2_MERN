/*
name: Dmitrii Mitin,
id: 301255191,
date: June 17, 2024
*/
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
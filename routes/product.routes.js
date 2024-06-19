/*
name: Dmitrii Mitin,
id: 301255191,
date: June 17, 2024
*/
const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller'); // Ensure this controller exists

// Define product routes
router.post('/', products.create);
router.get('/', products.findAll);
router.get('/:productId', products.findOne);
router.put('/:productId', products.update);
router.delete('/:productId', products.delete);
router.delete('/', products.deleteAll);
router.get('/search', products.findByName);

module.exports = router;
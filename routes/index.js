/*
name: Dmitrii Mitin,
id: 301255191,
date: June 17, 2024
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

module.exports = router;
const express = require('express');
const controller = require('../controllers/universities');
const passport = require('passport');
const router = express.Router();

router.get('/getallUniversities' ,controller.getAllUniversties);

module.exports = router;
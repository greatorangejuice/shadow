const express = require('express');
const controller = require('../controllers/universities');
const passport = require('passport');
const router = express.Router();

router.get('/getallUniversities' ,controller.getAllUniversities);
router.post('/addUniversity', controller.addUniversity);

module.exports = router;
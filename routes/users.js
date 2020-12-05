const express = require('express');
const controller = require('../controllers/users');
const passport = require('passport');
const router = express.Router();

router.get('/getallusers', passport.authenticate('jwt', {session: false}) ,controller.getAllUsers);
router.post('/', controller.createUser);
router.post('/:id', controller.createUser);

module.exports = router;

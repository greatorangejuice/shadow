const express = require('express');
const controller = require('../controllers/users');
const router = express.Router();

router.post('/getallusers', controller.getAllUsers);
router.post('/', controller.createUser);
router.post('/:id', controller.createUser);

module.exports = router;

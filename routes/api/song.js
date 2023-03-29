const express = require('express');
const router = express.Router();
const songCtrl = require('../../controllers/api/song');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/:id', songCtrl.create);

// GET /api/users/check-token

module.exports = router;
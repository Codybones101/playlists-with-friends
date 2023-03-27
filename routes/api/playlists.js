const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../../controllers/api/playlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', playlistsCtrl.create);

// GET /api/users/check-token

module.exports = router;
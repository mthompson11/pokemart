const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, itemsCtrl.index);
router.get('/:id', ensureLoggedIn, itemsCtrl.show);

module.exports = router;
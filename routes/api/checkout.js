const express = require('express');
const router = express.Router();
const checkoutCtrl = require('../../controllers/api/checkout');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, checkoutCtrl.checkout);

module.exports = router;
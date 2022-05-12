const express = require('express');
const router = express.Router();
const checkoutCtrl = require('../../controllers/api/checkout');

router.post('/', checkoutCtrl.checkout);

module.exports = router;
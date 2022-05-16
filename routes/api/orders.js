const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/cart', ensureLoggedIn, ordersCtrl.cart);
router.put('/cart/qty', ensureLoggedIn, ordersCtrl.setItemQtyInCart);
router.post('/cart/items/:id', ensureLoggedIn, ordersCtrl.addToCart);
router.put('/cart/paid', ensureLoggedIn, ordersCtrl.markCartPaid);

module.exports = router;
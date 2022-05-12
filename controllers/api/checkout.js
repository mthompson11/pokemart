const stripe = require('stripe')('sk_test_51KwpwCIbR7VNEzns0ydbX8dze4S2JowaDJNPuIykbhUhGfDY2cSfdeUIfcVcf86VmOuRNOn2ob5kthCAjcLdNRrL00mqJ0Orww');

async function checkout(req, res){
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.cart.lineItems.map((item) => ({price: item.item.stripeId, quantity : item.qty})),
      mode: 'payment',
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/`,
    });
  
    res.json({url: session.url})
  };

  module.exports = {
      checkout
  };
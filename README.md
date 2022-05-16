# Pokemart


## Background 
Pokemart is an ecommerce app that incorporates the Stripe API in order to handle payments. 

<p align="center">
Shop and Stripe Checkout Mobile Views
</p>
<div align="center">
<img height="500px" src="https://i.imgur.com/EZUw09T.png"/>
<img height="500px" src="https://i.imgur.com/7lDOXdw.png"/>
</div>
<p align="center">
Shop Browser View
</p>
<img height="500px"src="https://i.imgur.com/Ez402lJ.png"/>


## Technologies Used
- MongoDB
- Node JS
- Express JS
- React
- Material UI
- Stripe API
- Heroku

## Getting Started
- https://pokemart-mern.herokuapp.com/

The app is currently hosted on Heroku (see link above). The Stripe checkout functionality is currently in test mode so it will not accept a real credit card. You can use the following test credit card numbers provided by Stripe.

Payment succeeds:

4242 4242 4242 4242

Payment requires authentication:

4000 0025 0000 3155

Payment is declined:

4000 0000 0000 9995

Aside from that the functionality should be pretty straightforward but feel free to leave a comment if you think it can be improved!

## Next Steps
- Add Order History
- Incorporate more Stripe functionality such as subscriptions, mixed carts, and multiple prices for invidivudal items
- Incorporate more Material UI functionality
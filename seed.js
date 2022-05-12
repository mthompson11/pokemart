require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Medical', sortOrder: 10},
      {name: 'Berries', sortOrder: 20},
      {name: 'Pokeballs', sortOrder: 30},
      {name: 'TM/HM', sortOrder: 40},
      {name: 'Evolution', sortOrder: 50},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Super Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Hyper Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Revive', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Antidote', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Mint Berry', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Mystery Berry', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Bitter Berry', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Ice Berry', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Burnt Berry', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Poke Ball', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Great Ball', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Ultra Ball', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Master Ball', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Fire Blast', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Earthquake', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Hyper Beam', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Poison Jab', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Ice Beam', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Fire Stone', description: 'Placeholder description', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Thunder Stone', description: 'Placeholder description', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Water Stone', description: 'Placeholder description', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
    ]);
      
    process.exit();
  
  })();
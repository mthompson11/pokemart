require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Medical', sortOrder: 10},
      {name: 'Pokeballs', sortOrder: 20},
      {name: 'TM/HM', sortOrder: 30},
      {name: 'Evolution', sortOrder: 40},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/OTgQYA6.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Super Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/k0UhX4z.png', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Hyper Potion', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/f9MEQHY.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Revive', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/aWB331u.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Antidote', description: 'Placeholder description', category: categories[0], price: 5.95, img: 'https://i.imgur.com/jIcKQkb.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Poke Ball', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Great Ball', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/rKsVygL.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Ultra Ball', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/aNyXIqi.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Master Ball', description: 'Placeholder description', category: categories[1], price: 5.95, img: 'https://i.imgur.com/ookdkib.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Fire Blast', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/ts4HPL3.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Earthquake', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/WAMYyej.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Hyper Beam', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/s76VLmJ.png', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Poison Jab', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/pa8LvGf.png', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Ice Beam', description: 'Placeholder description', category: categories[2], price: 5.95, img: 'https://i.imgur.com/pM8CfAA.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Fire Stone', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/nz4bEcS.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Thunder Stone', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/xMB2axz.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
        {name: 'Water Stone', description: 'Placeholder description', category: categories[3], price: 5.95, img: 'https://i.imgur.com/E42QXv4.jpg', stripeId: 'price_1KxyGlIbR7VNEznsTq6BnZkC'},
    ]);
      
    process.exit();
  
  })();
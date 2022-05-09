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
        {name: 'Potion', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Super Potion', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Hyper Potion', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Revive', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Antidote', category: categories[0], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Mint Berry', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Mystery Berry', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Bitter Berry', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Ice Berry', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Burnt Berry', category: categories[1], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Poke Ball', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Great Ball', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Ultra Ball', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Master Ball', category: categories[2], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Fire Blast', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Earthquake', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Hyper Beam', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Poison Jab', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Ice Beam', category: categories[3], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Fire Stone', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Thunder Stone', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
        {name: 'Water Stone', category: categories[4], price: 5.95, img: 'https://i.imgur.com/W87pvre.jpg'},
    ]);
      
    process.exit();
  
  })();
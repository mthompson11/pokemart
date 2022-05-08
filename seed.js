require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Medical', sortOrder: 10},
      {name: 'Berries', sortOrder: 20},
      {name: 'Pokeballs', sortOrder: 30},
      {name: 'TM/HM', sortOrder: 40},
      {name: 'Evolution', sortOrder: 50},
    ]);
      process.exit();
  
  })();
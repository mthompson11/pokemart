const Item = require('../../models/item');

async function index(req,res){
    const items = await Item.find({}).sort('name').populate('category').exec();
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(items);
};

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.json(item);
  };

module.exports = {
    index,
    show
};
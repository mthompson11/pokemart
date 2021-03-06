const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name : { type: String, required: true },
    description : { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 },
    img: { type: String, required: true },
    stripeId : { type : String, required: true }
},{
    timestamps : true
});

module.exports = itemSchema;
//2.7 setup mongoose model for items
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//2.8 create the scema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//2.9 export the schema for use in other files
module.exports = Item = mongoose.model('item', ItemSchema);


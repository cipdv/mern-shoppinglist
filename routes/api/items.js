const express = require ('express');
const router = express.Router();

//2.11 bring in Item model
const Item = require ('../../models/Item');

//2.12 @route GET api/items
//@desc get all items
//@access public
router.get('/', (req, res)=>{
    Item.find()
        .sort({ date: -1})
        .then (items => res.json(items))
});

//2.13 @route POST api/items
//@desc get all items
//@access public
router.post('/', (req, res)=>{
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item=> res.json(item));
});

module.exports = router;


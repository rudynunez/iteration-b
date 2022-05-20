const mongoose = require('mongoose');
const items = require('./items');

const Item = require('../models/itemModel');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/items');
    console.log('Mongoose CONNECTED');
};


const seedDB = async () => {
    await Item.deleteMany({});

    for (let item of items) {
        const newItem = new Item({
            name: item.name,
            id: item.itemId,
            class: item.class,
            friendly_name: item.friendly_name,
            title: item.title,
            description: item.description,
            damage: item.damage,
            loadout_slot: item.loadout_slot,
            inventory_slot: item.inventory_slot,
            aura: item.aura 
        })
        await newItem.save();
        
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
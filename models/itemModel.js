const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    name: String,
    id: Number,
    class: String,
    friendly_name: String,
    title: String,
    description: String,
    damage: Object,
    inventory_slot: Number,
    loadout_slot: String,
    aura: String
});

module.exports = mongoose.model('Item', ItemSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    location: Array,
    title: String,
    description: String,
    player_name: String,
    player_id: String,
    player_inventory: Array,

});

module.exports = mongoose.model('Player', PlayerSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    player_name: String,
    username: String,
    player_id: String,
    player_title: String,
    self_description: String,
    outer_description: String,
    inventory: Array,
    loadout: Array
});

module.exports = mongoose.model('Player', PlayerSchema);
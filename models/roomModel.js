const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema ({
    nodeId: Number,
    location: Array,
    title: String,
    description: String,
    zones: String,
    players: Array
});

const PlayerSchema = new Schema ({
    location: Array,
    title: String,
    description: String,
    player_name: String,
    player_id: String,
    player_inventory: Array,

});

module.exports = mongoose.model('Room', RoomSchema);

module.exports = mongoose.model('Player', PlayerSchema);
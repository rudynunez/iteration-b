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

module.exports = mongoose.model('Room', RoomSchema);
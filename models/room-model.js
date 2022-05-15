const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema ({
    node_id: {
        Number,
        required: true
    },
    location: {
        Array,
        required: true,
    },
    title: {
        String,
        required: true
    },
    description: {
        Array,
        required: true
    },
    zones: Array,
    players: Array
});



module.exports = mongoose.model('room', roomSchema);
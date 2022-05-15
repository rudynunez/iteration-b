const mongoose = require('mongoose');
const rooms = require('./rooms');

const Room = require('../models/roomModel');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/game');
  console.log('Mongoose CONNECTED');
};


const seedDB = async () => {
    await Room.deleteMany({});
    
    
    const room = new Room({
        nodeId: rooms[0].nodeId,
        title: rooms[0].title,
        location: rooms[0].location,
        players: rooms[0].players
    })
    await room.save();
    
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
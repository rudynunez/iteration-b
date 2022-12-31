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
    // Olde schooley
    
    // for(let i = 0; i < rooms.count; i++) {
    //     const newRoom = new Room({
    //         nodeId: rooms[i].nodeId,
    //         title: rooms[i].title,
    //         location: rooms[i].location,
    //         players: rooms[i].players
    //     })
    //     await newRoom.save();
    // }  
     
    for (let room of rooms) {

        const newRoom = new Room({
            nodeId: room.nodeId,
            title: room.title,
            description: room.description,
            location: room.location,
            
        })
        await newRoom.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
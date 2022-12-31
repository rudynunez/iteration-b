const mongoose = require('mongoose');
const rooms = require('./rooms');
const players = require('./players');

const Room = require('../models/roomModel');

const Player = require('../models/roomModel')

// mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/game');
    console.log('Mongoose CONNECTED');
};


const seedDB = async () => {
    await Room.deleteMany({});
    await Player.deleteMany({});
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

    for (let player of players) {

        const newPlayer = new Player({
            location: player.location,
            title: player.title,
            description: player.description,
            player_name: player.player_name,
            player_id: player.player_id,
            player_inventory: player.player_inventory,
            
        })
        await newPlayer.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
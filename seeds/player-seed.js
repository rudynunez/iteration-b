const mongoose = require('mongoose');
const players = require('./players');

const Player = require('../models/playerModel')

// mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/game');
    console.log('Mongoose CONNECTED');
};


const seedDB = async () => {
    await Player.deleteMany({});
      
    for (let player of players) {

        const newPlayer = new Player({
            location: player.location,
            title: player.title,
            description: player.description,
            player_name: player.player_name,
            // player_id: player.player_id,
            // player_inventory: player.player_inventory,
            
        })
        await newPlayer.save();
    }

};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
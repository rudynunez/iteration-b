const mongoose = require('mongoose');
const playersPresent = require('./playersPresent');

const Player = require('../models/playerModel');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/players');
    console.log('Mongoose CONNECTED');
};


const seedDB = async () => {
    await Player.deleteMany({});

    for (let player of playersPresent) {
        const newPlayer = new Player({
            player_name: player.player_name,
            username: player.username,
            player_id: player.player_id,
            player_title: player.player_title,
            self_description: player.self_description.paragraph,
            outer_description: player.outer_description.paragraph,
            inventory: player.inventory,
            loadout: player.loadout 
        })
        await newPlayer.save();
        
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});



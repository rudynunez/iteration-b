const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Room = require('../models/room-model');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/game');
  console.log('Mongoose CONNECTED');
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Room.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Room({
           location: `${cities[random1000].city}, ${cities[random1000].state}`,
           title: `${sample(descriptors)} ${sample(places)}` 
        })
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});
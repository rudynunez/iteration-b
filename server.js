const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Room = require('./models/roomModel');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/game');
  console.log('Mongoose CONNECTED');
};

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/rooms', async (req, res) => {
    const rooms = await Room.find({});
    res.render('rooms/index', { rooms });
});

// SHOW

app.get('/rooms/new', async (req, res) => {
    res.render('rooms/new');
});

app.post('/rooms', async (req, res) => {
   const room = new Room(req.body.room);
   await room.save();
res.redirect(`/rooms/${room._id}`);
});

app.get('/rooms/:id', async (req, res) => {
    const room = await Room.findById(req.params.id);
    res.render('rooms/show', { room });
});

app.get('/rooms/:id/edit', async (req, res) => {
    const room = await Room.findById(req.params.id);
    res.render('rooms/edit', { room });
});



app.listen(3011, () => {
    console.log("Serving on Port 3011")
});
'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const dogHandler = require('./Modules/dogHandler');

const app = express();

app.use(cors());
// REQUIRED to allow req.body to show our content
app.use(express.json())

const PORT = process.env.PORT

// Establish connection with Atlas MongoDB
mongoose.connect(process.env.MONGODB_CONN);

// Assign the connection to a variable for ease of use
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));


app.get('/', (req, res, next) => res.status(200).send('Default Route working'));

app.get('/dogs', dogHandler.getDogs);
app.post('/dogs', dogHandler.postDog);
app.delete('/dogs/:id', dogHandler.deleteDog);

app.get('*', (req, res, next) => res.status(404).send('Resource not Found'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
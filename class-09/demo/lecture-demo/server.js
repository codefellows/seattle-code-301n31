'use strict' 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getPhotos = require('./modules/photos')

const PORT = process.env.PORT

const app = express();

app.use(cors());

app.get('/', (req,res,next) => res.status(200).send('Default Route working'));

app.get('/photos', getPhotos)

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
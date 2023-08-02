'use strict' 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios')
const unsplashData = require('./unsplashdata.json')

const PORT = process.env.PORT

const app = express();

app.use(cors());

app.get('/', (req,res,next) => res.status(200).send('Default Route working'));

app.get('/photos', async (req,res,next) => {
    try{
        // const searchQuery = req.query.searchQuery
        const {searchQuery} = req.query;
        const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&query=${searchQuery}`
        const response = await axios.get(url);
        const formattedData = response.data.results.map(photo => new Photo(photo))
        // Working with Static Data to prevent hammering API
        // res.status(200).send(formattedData);
        res.status(200).send(formattedData)
    }
    catch(error){
        next(error)
    }
})

class Photo  {
    constructor(obj){
        this.imgURL = obj.urls.regular;
        this.author = obj.user.name;
        this.authorLink = obj.user.links.html
    }
}


app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
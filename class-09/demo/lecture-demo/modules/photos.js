'use strict'
const axios = require('axios')

function getPhotos(req, res, next){
    const {searchQuery} = req.query;
    const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&query=${searchQuery}`
    axios.get(url)
        .then(response => response.data.results.map(photo => new Photo(photo)))
        .then(formattedData => res.status(200).send(formattedData))
        .catch(err => next(err))
}

class Photo  {
    constructor(obj){
        this.imgURL = obj.urls.regular;
        this.author = obj.user.name;
        this.authorLink = obj.user.links.html
    }
}

module.exports = getPhotos
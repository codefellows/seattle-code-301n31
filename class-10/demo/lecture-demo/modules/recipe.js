'use strict'

const axios = require("axios");
const cache = require('./cache');

function getRecipe(req, res, next) {
    const { ingredient } = req.query
    const key = 'recipe ' + ingredient

    if (cache[key] && (Date.now() - cache[key].timestamp < 60000)) {
        console.log('cache hit - sending data from cache')
        res.status(200).send(cache[key].data)
    }
    else {
        console.log('cache miss - making a new request')
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.EDEMAM_ID}&app_key=${process.env.EDEMAM_KEY}`;
        axios.get(url)
            .then(response => response.data.hits.map(dish => new Recipe(dish.recipe)))
            .then(formattedData => {
                cache[key] = {};
                cache[key].data = formattedData;
                cache[key].timestamp = Date.now()
                res.status(200).send(formattedData)
            })
            .catch(err => next(err))
    }


}

class Recipe {
    constructor(recipe) {
        this.uri = recipe.uri;
        this.label = recipe.label;
        this.image_url = recipe.image;
        this.ingredients = recipe.ingredientLines;
        this.totalTime = recipe.totalTime;
    }
}

module.exports = getRecipe;
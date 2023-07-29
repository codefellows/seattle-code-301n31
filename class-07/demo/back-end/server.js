'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const shoppingListData = require('./data/shopping-list.json')

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response, next) => {
    response.status(200).send('Default Route Working');
});

app.get('/shoppingList', (req, res, next) => {
    try {
        const type = req.query.type;
        console.log(type);
        const newList = shoppingListData.lists.filter(list => list.listName === type);
        const formattedData = newList[0].items.map(foodItem => new Food(foodItem));
        // throw new Error('Hey this isnt working properly');
        res.status(200).send(formattedData);
    }
    catch (error) {
        next(error);
    }


})

class Food {
    constructor(obj) {
        this.name = obj.name
        this.description = obj.description
    }
}

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
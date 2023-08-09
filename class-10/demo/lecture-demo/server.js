'use strict'

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const getRecipe = require('./modules/recipe')

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002

app.get('/', (req, res) => res.status(200).send('Default Route Working'))

app.get('/recipe', getRecipe);

app.listen(PORT, () => console.log(`listening on ${PORT}`))
'use strict'

const mongoose = require('mongoose');

const {Schema} = mongoose;

const dogSchema = new Schema({
    name: String,
    color: String,
    longTail: Boolean,
    age: Number,
    location: String
});

const dogModel = mongoose.model('Dog', dogSchema);

module.exports = dogModel;
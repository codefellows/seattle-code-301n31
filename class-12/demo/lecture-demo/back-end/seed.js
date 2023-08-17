'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_CONN);

const Dog = require('./Model/dog');

async function seed() {
    const myDog = new Dog({
        name: 'Luna',
        color: 'Brindle',
        longTail: true,
        age: 8,
        location: 'Tacoma'
    })

    await myDog.save()
        .then(() => console.log('Saved Luna to DB'))
        .catch(err => console.error(err));

    await Dog.create({
        name: 'Koda',
        color: 'Black&White',
        longTail: true,
        age: 4,
        location: 'Seattle'
    })
        .then(() => console.log('Saved Koda to DB'))
        .catch(err => console.error(err));

    mongoose.disconnect();
}

seed();
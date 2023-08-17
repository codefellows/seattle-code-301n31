'use strict'

const Dog = require('../Model/dog');

const dogHandler = {};

dogHandler.getDogs = function(req, res, next){
    let queryObject = {};

    if(req.query.location){
        queryObject = {location: req.query.location}
    }

    Dog.find(queryObject)
        .then(data => res.status(200).send(data))
        .catch(err => next(err));
}

dogHandler.postDog = function(req, res, next){
    const data = req.body;
    Dog.create(data)
        .then(createdDog => res.status(201).send(createdDog))
        .catch(err => next(err));
}

dogHandler.deleteDog = function(req, res, next){
    const {id} = req.params
    Dog.findByIdAndDelete(id)
        .then(deletedDog => res.status(200).send(deletedDog))
        .catch(err => next(err));
}

module.exports = dogHandler;
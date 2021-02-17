'use strict';

const firebase = require('../db');
const Book = require('../models/Books');
const firestore = firebase.firestore();

const addUser = async(req,res,next) =>{
    try{

    }catch(error){
        res.status(400).send(error.message);
    }
}
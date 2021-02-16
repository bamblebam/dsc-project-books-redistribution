'use strict';
// import firebase from '../db';   <-Can be written to these

const firebase = require('../db');
const User = require('../models/Users');
const firestore = firebase.firestore();

const addUser = async(req,res,next) =>{

    try{

        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send("Successfully added");

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUser = async(req,res,next)=>{
    try{

        const users = await firestore.collection('users');
        const data = await users.get();
        const UserArraydata =[];

        if(data.empty){
            res.status(404).send("No record for users found");
        }
        else{
            data.forEach(doc =>{
                const user1 = new User(
                    doc.id,
                    doc.data().username,
                    doc.data().password,
                    doc.data().email,
                    doc.data().addedbooks,
                    doc.data().phone,
                    doc.data().education,
                    doc.data().bio,
                    doc.data().photoURL,
                    doc.data().createdAt,
                );
                UserArraydata.push(user1);
            });
            res.send(UserArraydata);
        }

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getUser = async(req,res,next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('users').doc(id);
        await user.update(data);
        res.send('Profile updated successfully !');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('User Account deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}
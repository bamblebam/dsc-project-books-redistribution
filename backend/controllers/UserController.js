'use strict';
// import firebase from '../db';   <-Can be written to these

const firebase = require('../db');
const User = require('../models/Users');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {

    try {

        const data = req.body;
        console.log(data);
        var email = data.email;
        var password = data.password;

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                firestore.collection('users').doc(user.uid).set(data);
                res.send("Successfully added");

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                res.send(errorMessage);
            });



    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();

        const Array = [];
        if (data.empty) {
            res.status(404).send('No record found');
        } else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().username,
                    doc.data().password,
                    doc.data().email,
                    doc.data().addedbooks,
                    doc.data().phone,
                    doc.data().education,
                    doc.data().bio,
                    doc.data().photoURL,
                    doc.data().createdAt

                );
                Array.push(user);
            });
            res.send(Array);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if (!data.exists) {
            res.status(404).send('User not found');
        } else {
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
        const user = await firestore.collection('users').doc(id);
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

const signInUser = async (req, res, next) => {

    var email = req.body.email;
    var password = req.body.password;

    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {

            var user = userCredential.user;

            const data = firestore.collection('users').doc(user.uid);
            const doc = await data.get();
            if (!doc.exists) {
                res.status(404).send('User not found');
            } else {
                res.send(doc.data());
            }

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

const signOutUser =(req,res,next)=>{
    firebase.auth().signOut().then(() => {
        
        res.redirect('/home')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
}

  

module.exports = {
    addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    signInUser,
    signOutUser
}
'use strict';

const firebase = require('../db');
const Book = require('../models/Books');
const firestore = firebase.firestore();
var storage = firebase.storage();
var storageRef = storage.ref();
const addbook = async(req,res,next) =>{
    try{

        const userid = req.params.userId;
        const data = req.body;
        
        var bookRef = storageRef.child('images/'+req.body.imgfile);
        var metadata = {
            
            id:req.body.id,
            uid: userid
          };
        var uploadTask = bookRef.put(req.body.imgfile, metadata);
        // Out here the body data has ever data except the userId
        const bookData ={
            userId :userid,
            ...req.body,
            storageref:'images/'+req.body.imgfile

        };
        await firestore.collection('books').doc().set(bookData);
        res.send('Book added successfully!');

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllBooksofUser = async(req,res,next) =>{
    try{

        const user = req.params.userId;
        const books = await firestore.collection('books').where("userId", '==',user);
        const data = await books.get();

        const bookArray =[];
        if(books.empty){
            res.status(404).send("No books added");
        }else{
        
            data.forEach(doc =>{
                const book = new Book(
                    doc.id,
                    doc.data().userId,
                    doc.data().bookImage,
                    doc.data().booktitle,
                    doc.data().requested_users,
                    doc.data().created_at ,
                    doc.data().description
                );
                bookArray.push(book);
            });

            res.send(bookArray);
        }

    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports={
    addbook,
    getAllBooksofUser
}
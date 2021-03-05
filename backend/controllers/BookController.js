'use strict';

const firebase = require('../db');
const Book = require('../models/Books');
const firestore = firebase.firestore();

const addbook = async(req,res,next) =>{
    try{

        const userid = req.params.userId;
        const data = req.body;

        var metadata = {
            
            id:req.body.id,
            uid: userid
          };
 
        const bookData ={
            userId :userid,
            ...req.body,
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

const getAbook = async(req,res,next) =>{
    try{

        const bookid = req.params.bookId;
        const book = await firestore.collection('books').doc(bookid);
        console.log(bookid);
        const data = await book.get();
        console.log(data.exists);
        if(!data.exists){
            res.status(404).send('Book not found');
        }else{

            res.send(data.data());
        }

    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateBook = async (req, res, next) => {
    try {
        const id = req.params.bookId;
        const data = req.body;
        const book = await firestore.collection('books').doc(id);
        await book.update(data);
        res.send('Book updated successfully !');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBook = async (req, res, next) => {
    try {
        const id = req.params.bookId;
        console.log(id);
        await firestore.collection('books').doc(id).delete();
        res.send('Book deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAllBookWithRespectiveUser = async (req ,res, next) =>{
    try{
        const books = await firestore.collection('books');
        const data_from_firestore = await books.get();
        const Array =[];
    
        if(data_from_firestore.empty){
            res.send(404).send("No data in database");
        }else{
            let promise = new Promise(function(resolve, reject) {
                data_from_firestore.forEach(async doc =>{
                    const bookTitle = doc.data().booktitle;
                    const des = doc.data().description;
                    const user_id = doc.data().userId;
                    const userData = await firestore.collection('users').doc(user_id);
                    const docdata = await userData.get();
                    const jsondata = {
                        "Title" :bookTitle,
                        "Description" :des,
                        "Belongs_To" :docdata.data().username,
                    };
                    Array.push(jsondata);

                });
                setTimeout(() => resolve(Array), 1000);
              });
              promise.then((Array)=>{
                console.log(Array);
                  res.send(Array);
                  
              }).catch((error)=>{
                console.log(error);
                  res.send(error);
              });
            
        }

    }catch(error){
        res.status(400).send(error.message);
    }

}


module.exports={
    addbook,
    getAllBooksofUser,
    getAbook,
    updateBook,
    deleteBook,
    GetAllBookWithRespectiveUser
}
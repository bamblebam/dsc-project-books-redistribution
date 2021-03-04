const express = require('express');

const {
    addbook,
    getAllBooksofUser,
    getAbook,
    updateBook,
    deleteBook,
    GetAllBookWithRespectiveUser
} = require('../controllers/BookController');

const router = express.Router();

router.post('/addbook/:userId',addbook);
router.get('/getbooks/:userId',getAllBooksofUser);
router.get('/thisbook/:bookId',getAbook);
router.put('/update/:bookId',updateBook);
router.delete('/delete/:bookId',deleteBook);
router.get('/booksWithUser',GetAllBookWithRespectiveUser);

module.exports ={
    routes:router
}
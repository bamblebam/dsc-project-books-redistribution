const express = require('express');

const {
    addbook,
    getAllBooksofUser,
    getAbook,
    updateBook,
    deleteBook,
    GetAllBookWithRespectiveUser,
    uploadBookImage
} = require('../controllers/BookController');

const router = express.Router();

router.post('/addbook/:userId',addbook);
router.get('/getbooks/:userId',getAllBooksofUser);
router.get('/thisbook/:bookId',getAbook);
router.put('/update/:bookId',updateBook);
router.delete('/delete/:bookId',deleteBook);
router.get('/booksWithUser',GetAllBookWithRespectiveUser);
router.post('/uploadImage/:bookId',uploadBookImage);

module.exports ={
    routes:router
}

// export default router;
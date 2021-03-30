const express = require('express');
var multer = require('multer');
const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const GoogleDriveStorage = require('multer-google-drive');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage })

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
router.post('/uploadImage',upload.single('bookImage'),uploadBookImage);

module.exports ={
    routes:router
}

// export default router;
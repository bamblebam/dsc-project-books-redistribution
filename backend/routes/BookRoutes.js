const express = require('express');

const {
    addbook,
    getAllBooksofUser
} = require('../controllers/BookController');

const router = express.Router();

router.post('/addbook/:userId',addbook);
router.get('/getbooks/:userId',getAllBooksofUser);
module.exports ={
    routes:router
}
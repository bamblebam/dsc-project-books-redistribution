const express = require('express');
const {addUser, 
    getAllUser, 
    getUser,
    updateUser,
    deleteUser
   } = require('../controllers/UserController');

const router = express.Router();

router.post('/User',addUser);
router.get('/allUser',getAllUser);
router.get('/user/:id',getUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
module.exports = {
    routes:router
}
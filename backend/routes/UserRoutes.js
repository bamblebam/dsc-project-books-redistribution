const express = require('express');
const { addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    signInUser,
    signOutUser
} = require('../controllers/UserController');

const router = express.Router();

router.post('/User', addUser);
router.get('/allUser', getAllUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/login', signInUser);
router.post('/signOut', signOutUser);
module.exports = {
    routes: router
}
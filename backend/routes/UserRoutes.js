const express = require('express');
const { addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    signInUser,
    signOutUser,
    googleSignIn,
    userPasswordReset,
    addToUserWishlist,
    recommendBook,
    UploadImage 
} = require('../controllers/UserController');

const router = express.Router();

router.post('/User', addUser);
router.get('/allUser', getAllUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/login', signInUser);
router.post('/signOut', signOutUser);
router.get('/googleSignIn', googleSignIn);
router.get('/passwordReset', userPasswordReset);
router.post('/addWishListBook', addToUserWishlist);
router.get('/recommend/:id', recommendBook);
router.post('/UploadImage',UploadImage);
module.exports = {
    routes: router
}
// export default router;
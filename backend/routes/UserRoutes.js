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
    UploadImage,
    singleFileUpload
 
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
router.post('/UploadImage',upload.single('profile'),UploadImage);
router.post('/uploadMulter', upload.single('profile'),singleFileUpload);

module.exports = {
    routes: router
}
// export default router;
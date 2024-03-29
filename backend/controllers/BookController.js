'use strict'

const firebase = require('../db')
const Book = require('../models/Books')
const firestore = firebase.firestore()
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage })


const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json';

let Imageauth;


fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    authorize(JSON.parse(content));
  });

  function authorize(credentials) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client);
      oAuth2Client.setCredentials(JSON.parse(token));
      Imageauth = oAuth2Client;
    });
  }

  function getAccessToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        Imageauth = authoAuth2Client;
      });
    });
  }

const uploadBookImage = async(req,res,next) =>{
	const filename = req.file.originalname;
	console.log(req.file)
    const image_Name = './upload/'+filename;
    var fileMetadata = {
        name: filename, // file name that will be saved in google drive
		parents:['1MTy211iKX1fvsMggjE9AkbkvKkaJkqxk']
      };
    
      var media = {
        mimeType: 'image/jpg',
        body: fs.createReadStream(image_Name), // Reading the file from our server
      };
      // Authenticating drive API
      const drive = google.drive({ version: 'v3', auth: Imageauth });
    
      // Uploading Single image to drive
      drive.files.create(
        {
          resource: fileMetadata,
          media: media,
        },
        async (err, file) => {
          if (err) {
            // Handle error
            console.error(err.msg);
            console.log(err.msg);
            console.log('Main  error :',err)
            return res
              .status(400)
              .json({ errors: [{ msg: 'Server Error try again later' }] });
          } else {
            console.log(file.data.id);
            try{
                fs.unlinkSync(image_Name);
                console.log(image_Name," Has been deleted  ");
            }catch(err){
                console.log("Error while deleting");
            }
            // if file upload success then return the unique google drive id
            res.status(200).json({

              fileID:  "https://drive.google.com/thumbnail?id="+file.data.id,
            });
          }
        }
      )

}
const addbook = async (req, res, next) => {
	try {
		let current = new Date()

		const userid = req.params.userId
		const data = req.body

		var metadata = {
			id: req.body.id,
			uid: userid,
		}

		const bookData = {
			userId: userid,
			isAvailable: true,
			...req.body,
			timestamp: current,
		}
		await firestore.collection('books').doc().set(bookData)
		res.send('Book added successfully!')
	} catch (error) {
		console.log(error)
		res.status(400).send(error.message)
	}
}

const getAllBooksofUser = async (req, res, next) => {
	try {
		const user = req.params.userId
		const books = await firestore.collection('books').where('userId', '==', user)
		const data = await books.get()

		const bookArray = []
		if (books.empty) {
			res.status(404).send('No books added')
		} else {
			data.forEach(doc => {
				const book = new Book(
					doc.id,
					doc.data().userId,
					doc.data().bookImage,
					doc.data().booktitle,
					doc.data().requested_users,
					doc.data().created_at,
					doc.data().description,
					doc.data().category
				)
				bookArray.push(book)
			})

			res.send(bookArray)
		}
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const getAbook = async (req, res, next) => {
	try {
		const bookid = req.params.bookId
		const book = await firestore.collection('books').doc(bookid)
		console.log(bookid)
		const data = await book.get()
		console.log(data.exists)
		if (!data.exists) {
			res.status(404).send('Book not found')
		} else {
			res.send(data.data())
		}
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const updateBook = async (req, res, next) => {
	try {
		const id = req.params.bookId
		const data = req.body
		const book = await firestore.collection('books').doc(id)
		await book.update(data)
		res.send('Book updated successfully !')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const deleteBook = async (req, res, next) => {
	try {
		const id = req.params.bookId
		console.log(id)
		await firestore.collection('books').doc(id).delete()
		res.send('Book deleted successfuly')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const GetAllBookWithRespectiveUser = async (req, res, next) => {
	try {
		const books = await firestore.collection('books')
		const data_from_firestore = await books.get()
		const Array = []
		// console.log(data_from_firestore)
		if (data_from_firestore.empty) {
			res.send(404).send('No data in database')
		} else {
			let promise = new Promise(function (resolve, reject) {
				data_from_firestore.forEach(async doc => {
					const bookTitle = doc.data().booktitle
					const des = doc.data().description
					const user_id = doc.data().userId
					const bookImg= doc.data().bookImage
					const userData = await firestore.collection('users').doc(user_id)
					const docdata = await userData.get()
					const jsondata = {
						Title: bookTitle,
						Description: des,
						Belongs_To: docdata.data().username,
						image:bookImg
					}
					Array.push(jsondata)
				})
				setTimeout(() => resolve(Array), 1000)
			})
			promise
				.then(Array => {
					console.log(Array)
					res.send(Array)
				})
				.catch(error => {
					console.log(error)
					res.send(error)
				})
		}
	} catch (error) {
		res.status(400).send(error.message)
	}
}

module.exports = {
	addbook,
	getAllBooksofUser,
	getAbook,
	updateBook,
	deleteBook,
	GetAllBookWithRespectiveUser,
	uploadBookImage
}

// export default  addbook;
// export default getAllBooksofUser;
// export default getAbook;
// export default updateBook;
// export default deleteBook;
// export default GetAllBookWithRespectiveUser;

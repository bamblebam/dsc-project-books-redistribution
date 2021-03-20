'use strict'
// import firebase from '../db';   <-Can be written to these
// import { firestore as _firestore, auth } from '../db';
// const admin = require('firebase');
const firebase = require('../db')
const User = require('../models/Users')
const firestore = firebase.firestore()
const auth = firebase.auth()
const { GoogleAuth } = require('google-auth-library')
const firebase1 = require('firebase')
var stringSimilarity = require('string-similarity')
// import firebase from 'firebase/app';
// import 'firebase/auth';
const addUser = async (req, res, next) => {
	try {
		const data = req.body
		var email = data.email
		var password = data.password

		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(userCredential => {
				var user = userCredential.user
				firestore.collection('users').doc(user.uid).set(data)

				user
					.sendEmailVerification()
					.then(function () {})
					.catch(function (error) {
						console.log('Error occured')
					})
				res.send('Successfully added')
			})
			.catch(error => {
				var errorCode = error.code
				var errorMessage = error.message

				res.send(errorMessage)
			})
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const getAllUser = async (req, res, next) => {
	try {
		const users = await firestore.collection('users')
		const data = await users.get()

		const Array = []
		if (data.empty) {
			res.status(404).send('No record found')
		} else {
			data.forEach(doc => {
				const user = new User(
					doc.id,
					doc.data().username,
					doc.data().password,
					doc.data().email,
					doc.data().addedbooks,
					doc.data().phone,
					doc.data().education,
					doc.data().bio,
					doc.data().photoURL,
					doc.data().createdAt
				)
				Array.push(user)
			})
			res.send(Array)
		}
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const getUser = async (req, res, next) => {
	try {
		const id = req.params.id
		const user = await firestore.collection('users').doc(id)
		const data = await user.get()
		if (!data.exists) {
			res.status(404).send('User not found')
		} else {
			res.send(data.data())
		}
	} catch (error) {
		res.status(400).send(error.message)
	}
}
const updateUser = async (req, res, next) => {
	try {
		const id = req.params.id
		const data = req.body
		const user = await firestore.collection('users').doc(id)
		await user.update(data)
		res.send('Profile updated successfully !')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const deleteUser = async (req, res, next) => {
	try {
		const id = req.params.id
		await firestore.collection('users').doc(id).delete()
		res.send('User Account deleted successfuly')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const signInUser = async (req, res, next) => {
	var email = req.body.email
	var password = req.body.password

	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(async userCredential => {
			var user = userCredential.user

			const data = firestore.collection('users').doc(user.uid)
			const doc = await data.get()
			if (!doc.exists) {
				res.status(404).send('User not found')
			} else {
				res.send(doc.data())
			}
		})
		.catch(error => {
			var errorCode = error.code
			var errorMessage = error.message
		})
}

const signOutUser = (req, res, next) => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			res.redirect('/home')
		})
		.catch(error => {
			// An error happened.
			console.log(error)
		})
}

const googleSignIn = (req, res, next) => {
	var provider = new auth.GoogleAuthProvider()
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(result => {
			/** @type {firebase.auth.OAuthCredential} */
			var credential = result.credential

			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = credential.accessToken
			// The signed-in user info.
			var user = result.user
			// ...
		})
		.catch(error => {
			// Handle Errors here.
			var errorCode = error.code
			var errorMessage = error.message
			// The email of the user's account used.
			var email = error.email
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential
			// ...
		})
	res.send('done')
}
const userPasswordReset = (req, res, next) => {
	var auth = firebase.auth()
	var emailAddress = req.body.email

	auth
		.sendPasswordResetEmail(emailAddress)
		.then(function () {
			// res.send("email sent")
			res.redirect('http://localhost:3000/auth/authentication')
			// Email sent.
		})
		.catch(function (error) {
			// An error happened.
			console.log(error)
		})
}

const addToUserWishlist = async (req, res, next) => {
	console.log('inside fn')
	try {
		const userid = req.body.userId
		const bookid = req.body.id
		// const data = req.body;
		const user = firestore.collection('users').doc(userid)

		//
		const user1 = await user.update({
			wishListBooks: firebase1.firestore.FieldValue.arrayUnion(bookid),
		})
		console.log(user1)
		res.send('book added successfully !')
	} catch (error) {
		console.log(error)
	}
}

//Main function on main page
const recommendBook = async (req, res, next) => {
	try {
		const userId = req.params.id
		const user = firestore.collection('users').doc(userId)
		const data = await user.get()

		var userLocation = data.data().location
		userLocation = JSON.parse(JSON.stringify(userLocation))

		const userLat = userLocation.latitude
		const userLong = userLocation.longitude

		const booksAccordingToCategory = []
		const booksAccordingToCategoryID = []
		const recCategory = []
		const bookRanking = []
		const bookRankingId = []

		if (!data.exists) {
			res.status(404).send('User not found')
		} else {
			const wishListBooks = data.data().wishListBooks // This is wishlist Array - BOok IDS

			let promise = new Promise(function (resolve, reject) {
				wishListBooks.forEach(async function (item) {
					const bookid = item
					const book = firestore.collection('books').doc(bookid)
					const data = await book.get()

					const bookTitle = data.data().booktitle
					const category = data.data().category

					if (category != undefined) {
						category.forEach(cat => {
							if (!recCategory.includes(cat)) {
								recCategory.push(cat)
							}
						})
					}
				})
				setTimeout(() => resolve(recCategory), 1000)
			}).then(async recCategory => {
				console.log(recCategory)
				let promise = new Promise(function (resolve, reject) {
					recCategory.forEach(async function (item) {
						const bokksdata = await firestore
							.collection('books')
							.where('isAvailable', '==', true)
							.where('category', 'array-contains', item)
							.get()
						if (bokksdata.empty) {
							console.log('No matching documents.')
							return null
						} else {
							bokksdata.forEach(doc => {
								if (!booksAccordingToCategoryID.includes(doc.id)) {
									booksAccordingToCategoryID.push(doc.id)
									booksAccordingToCategory.push(doc.data())
								}
							})
						}
					})
					setTimeout(() => resolve(booksAccordingToCategory), 1000)
				})
					.then(booksAccordingToCategory => {
						booksAccordingToCategory.forEach(doc => {
							var location = JSON.stringify(doc['location'])
							location = JSON.parse(location)
							//const longitude = location._long;
							//const lat = location._lat;
							// console.log(userLat);
							//console.log(getDistance(userLat,userLong, location.lattitude,location.longitude));
							bookRanking.push(
								getDistance(userLat, userLong, location.latitude, location.longitude)
							)
						})

						for (var i = 0; i < bookRanking.length; i++) {
							for (var j = 0; j < bookRanking.length - i - 1; j++) {
								if (bookRanking[j] >= bookRanking[j + 1]) {
									var temp = bookRanking[j]
									bookRanking[j] = bookRanking[j + 1]
									bookRanking[j + 1] = temp
									temp = booksAccordingToCategory[j]
									booksAccordingToCategory[j] = booksAccordingToCategory[j + 1]
									booksAccordingToCategory[j + 1] = temp
								}
							}
						}

						res.send(booksAccordingToCategory)
					})
					.catch(error => {
						console.log(error)
						console.log(error.message)
					})
				/*
                .then((booksAccordingToCategory) => {
                    booksAccordingToCategory.forEach(book=>{

                        bookRanking.push(stringSimilarity.compareTwoStrings("G.V. Kumbojkar", book["booktitle"]));
                    })
                    for(var i=0;i<bookRanking.length;i++){
                        for(var j=0;j<bookRanking.length-i-1;j++){
                            if(bookRanking[j]<bookRanking[j+1]){
                                var temp=bookRanking[j];
                                bookRanking[j]=bookRanking[j+1];
                                bookRanking[j+1]=temp;
                                temp=booksAccordingToCategory[j];
                                booksAccordingToCategory[j]=booksAccordingToCategory[j+1];
                                booksAccordingToCategory[j+1]=temp
                            }
                        }
                    }
                    console.log(bookRanking)
                    console.log(booksAccordingToCategory)
                    res.send(booksAccordingToCategory);
                })*/
			})
		}
	} catch (error) {
		console.log(error.message)
	}
}

function deg2rad(degree) {
	return degree * (Math.PI / 180)
}

// Function returns value in kilometer
function getDistance(lat1, long1, lat2, long2) {
	const theta = long1 - long2
	var distance =
		Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta))
	distance = Math.acos(distance)
	distance = (180 / Math.PI) * distance
	distance = distance * 111.189577 //KM
	return Math.round(distance) //Integer 10.55 = 11
}

/*
const searchBookbyTitle = async (req, res, next) => {

    const title = req.body.bookTitle;
    if(!title.exists){
        res.send(404).send("Some error occurred");

    }else{

        const booksAccordingToCategory = [];
        const books = firebase.collection('books');
        const booksData = await books.get();



    }

}
*/

module.exports = {
	addUser,
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
}

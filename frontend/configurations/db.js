import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMjdPGj_MMlEa0Ub4mYe6gtm2m-dLAZw8",
    authDomain: "dscbooks-3a4c3.firebaseapp.com",
    databaseURL: "https://dscbooks-3a4c3.firebaseio.com",
    projectId: "dscbooks-3a4c3",
    storageBucket: "dscbooks-3a4c3.appspot.com",
    messagingSenderId: "401879675162",
    appId: "1:401879675162:web:0227715ffaee7fc0af7ca3"
}

const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig)

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const app = firebase.app()
const auth = firebase.auth()
const db = firebase.firestore()

export { firebaseApp, firebase, app, auth, db };
import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDPwpw5NlQfoRnmT25ssEbTIjxIZ2M9O1E",
    authDomain: "dsc-project-8d8cd.firebaseapp.com",
    projectId: "dsc-project-8d8cd",
    storageBucket: "dsc-project-8d8cd.appspot.com",
    messagingSenderId: "308644591275",
    appId: "1:308644591275:web:0e3f5f1295971f105629ee",
    measurementId: "G-LWXEXZH8XH",
    databaseURL: "https://dsc-project-8d8cd.firebaseio.com"
}

const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig)

export default firebaseApp;
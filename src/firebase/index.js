import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA4bPzjvJYbFPd8rUHuyRLDQJYg-KHzAM0",
    authDomain: "icon-library-b4868.firebaseapp.com",
    databaseURL: "https://icon-library-b4868.firebaseio.com",
    projectId: "icon-library-b4868",
    storageBucket: "icon-library-b4868.appspot.com",
    messagingSenderId: "446617708514"
};
firebase.initializeApp(config);

const storage = firebase.storage();
const database = firebase.database();

export {
    storage, database, firebase as default
}
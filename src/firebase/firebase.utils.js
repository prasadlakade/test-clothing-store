import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgYf9rfNShUjtbYqexrlp4HvUmeSb1Bxs",
    authDomain: "test-estore-db.firebaseapp.com",
    databaseURL: "https://test-estore-db.firebaseio.com",
    projectId: "test-estore-db",
    storageBucket: "test-estore-db.appspot.com",
    messagingSenderId: "551356100402",
    appId: "1:551356100402:web:e4242b744fa2e64d86b12b",
    measurementId: "G-G8T0BZPF0B"
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
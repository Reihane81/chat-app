import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA4PWJAwq4j3t0aOnQcLavlMYXz2eXFoCo",
    authDomain: "botogram-87965.firebaseapp.com",
    projectId: "botogram-87965",
    storageBucket: "botogram-87965.appspot.com",
    messagingSenderId: "502960038819",
    appId: "1:502960038819:web:5a43aae2b222c9a5557016"
}).auth();
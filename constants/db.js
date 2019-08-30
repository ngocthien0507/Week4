import firebase from 'firebase'; // 4.8.1

const firebaseConfig = {
    apiKey: "AIzaSyCcH42GhjuKivZdQ0nle_xqB5Tub9sGl_o",
    authDomain: "todo-a88db.firebaseapp.com",
    databaseURL: "https://todo-a88db.firebaseio.com",
    projectId: "todo-a88db",
    storageBucket: "",
    messagingSenderId: "303914455428",
    appId: "1:303914455428:web:95a4fba4eb018cb8"
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();

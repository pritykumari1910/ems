// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
    authDomain: "smart-bin-b30d2.firebaseapp.com",
    databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
    projectId: "smart-bin-b30d2",
    storageBucket: "smart-bin-b30d2.appspot.com",
    messagingSenderId: "23174065932",
    appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
    measurementId: "G-ED76D79XWV"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
var db = firebase.firestore();

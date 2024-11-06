// Firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
//     authDomain: "smart-bin-b30d2.firebaseapp.com",
//     databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
//     projectId: "smart-bin-b30d2",
//     storageBucket: "smart-bin-b30d2.appspot.com",
//     messagingSenderId: "23174065932",
//     appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
//     measurementId: "G-ED76D79XWV"

// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();

// // Detect the role from the URL parameters and update page accordingly
// const urlParams = new URLSearchParams(window.location.search);
// const role = urlParams.get('role');

// // Update login or signup form titles based on the role
// if (role) {
//     document.getElementById('loginTitle') && (document.getElementById('loginTitle').innerText = `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`);
//     document.getElementById('signupTitle') && (document.getElementById('signupTitle').innerText = `Sign Up as ${role.charAt(0).toUpperCase() + role.slice(1)}`);
// }

// // Handle Sign Up
// document.getElementById('signupForm') && document.getElementById('signupForm').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             // Save user data in Firestore with role
//             return db.collection('users').doc(user.uid).set({
//                 name: name,
//                 email: email,
//                 role: role
//             });
//         })
//         .then(() => {
//             alert(`${role.charAt(0).toUpperCase() + role.slice(1)} account created successfully`);
//             window.location.href = `${role}.html`; // Redirect to respective role's homepage
//         })
//         .catch((error) => {
//             console.error('Error signing up:', error.message);
//         });
// });

// // Handle Login
// document.getElementById('loginForm') && document.getElementById('loginForm').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             // Get user role from Firestore
//             db.collection('users').doc(user.uid).get().then((doc) => {
//                 const userData = doc.data();
//                 window.location.href = `${userData.role}.html`; // Redirect to respective role's homepage
//             });
//         })
//         .catch((error) => {
//             console.error('Error logging in:', error.message);
//         });
// });



// Import Firebase services

// Your Firebase project configuration (replace with your actual Firebase credentials)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
  authDomain: "smart-bin-b30d2.firebaseapp.com",
  databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
  projectId: "smart-bin-b30d2",
  storageBucket: "smart-bin-b30d2.appspot.com",
  messagingSenderId: "23174065932",
  appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
  measurementId: "G-ED76D79XWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// function handleLogin(role) {
//     const username = document.getElementById(`${role}-username`).value;
//     const password = document.getElementById(`${role}-password`).value;

//     // Here you can add your logic to handle login
//     alert(`${role.charAt(0).toUpperCase() + role.slice(1)} - Login: Username: ${username}, Password: ${password}`);
// }

// function handleSignUp(role) {
//     const username = document.getElementById(`${role}-username`).value;
//     const password = document.getElementById(`${role}-password`).value;

//     // Here you can add your logic to handle sign-up
//     alert(`${role.charAt(0).toUpperCase() + role.slice(1)} - Sign-Up: Username: ${username}, Password: ${password}`);
// }



// Login function
function handleLogin() {
    const email = document.getElementById('user-username').value;
    const password = document.getElementById('user-password').value;

    // Firebase Authentication: Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully logged in
            console.log("User logged in:", userCredential.user);
            alert("Login successful!");
            // Redirect to dashboard or another page
            window.location.href = "index.html"; // Change to your desired page
        })
        .catch((error) => {
            // Error handling
            console.error("Error during login:", error.message);
            alert("Login failed: " + error.message);
        });
}

// Check if a user is already logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is logged in, redirect to the dashboard
        window.location.href = "index.html"; // Change to your dashboard page
    }
});



//Handle Sign-Up
function handleSignUp() {
    const email = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const name = document.getElementById('admin-name').value;

    // Firebase Authentication: Sign up with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            alert("signUp Suceesfully")
            console.log("User signed up:", user);

            // Optionally, update the user's profile with the name
            return user.updateProfile({
                displayName: name
            });
        })
        .then(() => {
            // Optionally redirect to another page
            window.location.href = "index.html"; // Change to your desired page
        })
        .catch((error) => {
            // Handle errors
            console.error("Error during sign up:", error.message);
            alert("Sign up failed: " + error.message);
        });
}
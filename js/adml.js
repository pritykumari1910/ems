// // Initialize Firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
//   authDomain: "smart-bin-b30d2.firebaseapp.com",
//   databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
//   projectId: "smart-bin-b30d2",
//   storageBucket: "smart-bin-b30d2.appspot.com",
//   messagingSenderId: "23174065932",
//   appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
//   measurementId: "G-ED76D79XWV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // firebase.initializeApp(firebaseConfig);

// // const auth = firebase.auth();

// // function handleLogin() {
// //     const username = document.getElementById('user-username').value;
// //     const password = document.getElementById('user-password').value;

// //     auth.signInWithEmailAndPassword(username, password)
// //         .then((userCredential) => {
// //             // Login successful
// //             const user = userCredential.user;
// //             window.location.href = 'adminportal.html'; // Redirect to admin portal
// //         })
// //         .catch((error) => {
// //             // Handle Errors here.
// //             const errorCode = error.code;
// //             const errorMessage = error.message;
// //             alert(`Error: ${errorMessage}`);
// //         });
// // }







// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();


// const signup=document.getElementById('signup');
// signup.addEventListener("click", function (event){
//     event.preventDefault();
// })


// function handleSignUp() {
//     const name = document.getElementById('admin-name').value;
//     const email = document.getElementById('admin-username').value;
//     const password = document.getElementById('admin-password').value;

//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Sign-up successful
//             const user = userCredential.user;
//             alert('Sign-up successful!');

//             // Optionally, update the user's profile with the name
//             return user.updateProfile({
//                 displayName: name
//             });
//         })
//         .then(() => {
//             // Redirect to login or another page
//             window.location.href = 'admin-login.html'; // Redirect to admin login page or another page
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(`Error: ${errorMessage}`);
//         });
// }






// // Login function


// const Login=document.getElementById('Login');
// signup.addEventListener("click", function (event){
//     event.preventDefault();
// })
// function handleLogin() {
//     const email = document.getElementById('user-username').value;
//     const password = document.getElementById('user-password').value;

//     // Firebase Authentication: Sign in with email and password
//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Successfully logged in
//             console.log("User logged in:", userCredential.user);
//             alert("Login successful!");
//             // Redirect to dashboard or another page
//             window.location.href = "index.html"; // Change to your desired page
//         })
//         .catch((error) => {
//             // Error handling
//             console.error("Error during login:", error.message);
//             alert("Login failed: " + error.message);
//         });
// }

// // Check if a user is already logged in
// auth.onAuthStateChanged((user) => {
//     if (user) {
//         // User is logged in, redirect to the dashboard
//         window.location.href = "index.html"; // Change to your dashboard page
//     }
// });







// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
//    authDomain: "smart-bin-b30d2.firebaseapp.com",
//     databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
//     projectId: "smart-bin-b30d2",
//     storageBucket: "smart-bin-b30d2.appspot.com",
//     messagingSenderId: "23174065932",
//     appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
//     measurementId: "G-ED76D79XWV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Admin Sign-Up Function
// async function handleSignUp(event) {
//     event.preventDefault(); // Prevent form submission

//     // Retrieve form values
//     const email = document.getElementById('admin-username').value;
//     const password = document.getElementById('admin-password').value;
//     const name = document.getElementById('admin-name').value;
//     const category = document.querySelector('.dropdown-button').textContent; // Selected category

//     try {
//         // Register admin in Firebase Auth
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Store additional data in Firestore
//         await setDoc(doc(db, 'admins', user.uid), {
//             name: name,
//             email: email,
//             category: category,
//             role: 'admin'
//         });

//         // Show success message and redirect to admin dashboard
//         alert("Admin registered successfully!");
//         window.location.href = 'admin-login.html'; // Redirect to admin dashboard

//     } catch (error) {
//         console.error('Error signing up:', error);
//         alert(error.message);
//     }
// }

// // Attach event listener to the sign-up form
// document.getElementById('admin-signup-form').addEventListener('submit', handleSignUp);



// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Admin Sign-Up Function
async function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const email = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const name = document.getElementById('admin-name').value;
    const category = document.querySelector('.dropdown-button').textContent; // Selected category

    try {
        // Register admin in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional data in Firestore
        await setDoc(doc(db, 'admins', user.uid), {
            name: name,
            email: email,
            category: category,
            role: 'admin'
        });

        // Show success message and redirect to admin login page
        alert("Admin registered successfully!");
        window.location.href = 'admin-login.html'; // Redirect to admin login

    } catch (error) {
        console.error('Error signing up:', error);
        alert(error.message);
    }
}

// Admin Login Function
async function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const email = document.getElementById('admin-login-username').value;
    const password = document.getElementById('admin-login-password').value;

    try {
        // Authenticate the admin using Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Log success and redirect with a slight delay to ensure all async tasks complete
        console.log("Login successful. User: ", user);

        alert("Login successful! Redirecting to admin portal...");

        // Delay the redirection to avoid race conditions
        setTimeout(() => {
            window.location.href = 'admin.html'; // Redirect to admin dashboard
        }, 1000); // 1-second delay

    } catch (error) {
        console.error('Error logging in:', error);
        alert("Login failed: " + error.message);
    }
}

// Check Authentication Status on Page Load
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, redirect to admin portal
        console.log("User is authenticated. Redirecting to admin portal...");
        // setTimeout(() => {
            window.location.href = 'adminportal.html'; // Rediadminportal.htmlrect to admin dashboard
        // }, 1000); // 1-second delay
    } else {
        console.log("No user authenticated.");
    }
});

// Attach event listener to the sign-up form if present
const signUpForm = document.getElementById('admin-signup-form');
if (signUpForm) {
    signUpForm.addEventListener('submit', handleSignUp);
}

// Attach event listener to the login form if present
const loginForm = document.getElementById('admin-login-form');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}

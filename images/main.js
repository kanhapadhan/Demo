import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDk7-pMgJJ1yq2qbm9i1_P0_v5-pHJTb28",
  authDomain: "project-kp1-406607.firebaseapp.com",
  projectId: "project-kp1-406607",
  storageBucket: "project-kp1-406607.appspot.com",
  messagingSenderId: "862516440880",
  appId: "1:862516440880:web:1bbe4500e499058a8b62f5",
  measurementId: "G-MX0P6ESYHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
let email = 'benu@padhan.com'
let password = 'Kanha@123'

function signUp(email, password) {

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(userCredential)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
      // ..
    });
}
signUp(email, password)
//const auth = getAuth();
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
}

//signIn(email, password)

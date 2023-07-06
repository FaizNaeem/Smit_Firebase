import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebase/auth/9.23.0/firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCarN6h6FPkS3raGOKAScjMJcdp_r0kHWU",
  authDomain: "smitproject-39703.firebaseapp.com",
  projectId: "smitproject-39703",
  storageBucket: "smitproject-39703.appspot.com",
  messagingSenderId: "849520424684",
  appId: "1:849520424684:web:2a1feca7190271ea5557c9",
  measurementId: "G-LKLK8SZ6EX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("btn").addEventListener("click",()=>{
let a = document.getElementById("text").value
let b = document.getElementById("pass").value
console.log(a,b);
    createUserWithEmailAndPassword(auth, a, b)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    console.log(errorCode,errorMessage);
      });
})

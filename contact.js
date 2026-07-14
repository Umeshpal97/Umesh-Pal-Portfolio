// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDaCUJVGhMdgCuv2N3C36tnR2p7ZYvlAcI",
  authDomain: "umesh-portfolio-bf3a2.firebaseapp.com",
  projectId: "umesh-portfolio-bf3a2",
  storageBucket: "umesh-portfolio-bf3a2.firebasestorage.app",
  messagingSenderId: "920077072014",
  appId: "1:920077072014:web:d3fa8554da4bfc0c6afbdf",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form
const form = 
document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const now = new Date();

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      date:
now.toLocaleDateString("en-IN"),
      time: 
now.toLocaleTimeString("en-IN"),
      createdAt: serverTimestamp()
    });

    // alert("✅ Message Sent Successfully!");
    // form.reset();

    Swal.fire({
     icon:"success",
     title:"Message Sent!",
     text: "Thank you for contacting me. I'll get back to you soon.",
     confirmButtonColor: "#c84cff",
     width: window.innerWidth < 768 ? "300px" : "500px"
    });
    form.reset();

 }
 catch (error) {
    console.error(error);
    Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send message. Please try again.",
        confirmButtonColor: "#ff4d4d"
    });
  }
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzqQ8kAn2JCRQOwf9USuKlJkBasnoG0fM",
  authDomain: "tnpsc-quiz-hub.firebaseapp.com",
  projectId: "tnpsc-quiz-hub",
  storageBucket: "tnpsc-quiz-hub.firebasestorage.app",
  messagingSenderId: "20219954178",
  appId: "1:20219954178:web:1696f17c3836039175131b",
  measurementId: "G-9C2PWSV7P7"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase connected successfully!");
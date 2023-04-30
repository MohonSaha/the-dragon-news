// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6eFRWN1LIWb_Q9MKwk8mJCXKvR1zQpfI",
  authDomain: "the-dragon-news-fc139.firebaseapp.com",
  projectId: "the-dragon-news-fc139",
  storageBucket: "the-dragon-news-fc139.appspot.com",
  messagingSenderId: "948501025406",
  appId: "1:948501025406:web:90043080a16c6c56c87e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
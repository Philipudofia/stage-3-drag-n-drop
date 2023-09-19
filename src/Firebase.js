// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfpEjJn4Va_wHzpGeXt0Ouk4w4GzLRCJw",
  authDomain: "stage3dnd.firebaseapp.com",
  projectId: "stage3dnd",
  storageBucket: "stage3dnd.appspot.com",
  messagingSenderId: "618495602930",
  appId: "1:618495602930:web:51e101aae1ab1a9b79a06b",
  measurementId: "G-KJ34C2CJGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}
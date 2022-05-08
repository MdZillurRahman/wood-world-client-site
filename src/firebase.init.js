// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJeVW4Ftxxg4WKGE-lGh21M6SvVr0kKpk",
  authDomain: "wood-world-146a1.firebaseapp.com",
  projectId: "wood-world-146a1",
  storageBucket: "wood-world-146a1.appspot.com",
  messagingSenderId: "155558627349",
  appId: "1:155558627349:web:3465b9c3db2ed621a8a61c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
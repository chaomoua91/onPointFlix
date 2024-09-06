import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzqoNdejuw8vh6id_tw4uskbehjvnIuyc",
  authDomain: "onpointflix.firebaseapp.com",
  projectId: "onpointflix",
  storageBucket: "onpointflix.appspot.com",
  messagingSenderId: "422412827404",
  appId: "1:422412827404:web:4646b576ff5178faaa6729",
  measurementId: "G-VTBV6MSZZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

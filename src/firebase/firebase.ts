import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);

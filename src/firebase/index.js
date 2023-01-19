// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB64-PCDuIsPZJifPXgbG7BqsfmWg-jjKY',
  authDomain: 'ecommerce-react-1-e179f.firebaseapp.com',
  projectId: 'ecommerce-react-1-e179f',
  storageBucket: 'ecommerce-react-1-e179f.appspot.com',
  messagingSenderId: '650596230100',
  appId: '1:650596230100:web:4d7942bdebbcb73f3dec41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

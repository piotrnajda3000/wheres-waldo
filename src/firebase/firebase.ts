// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCN5hMHgg_ig8L4-cCXgTuyStSZT9oeEJU',
	authDomain: 'wheres-waldo-d1f8b.firebaseapp.com',
	projectId: 'wheres-waldo-d1f8b',
	storageBucket: 'wheres-waldo-d1f8b.appspot.com',
	messagingSenderId: '1025310186936',
	appId: '1:1025310186936:web:d542d3a2e6ab514422c34d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

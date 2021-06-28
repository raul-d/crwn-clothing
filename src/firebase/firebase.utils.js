import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCrKQqy_57GW1jQa9w6ydCenaImeb1yOhc",
  authDomain: "crwn-db-cde7b.firebaseapp.com",
  projectId: "crwn-db-cde7b",
  storageBucket: "crwn-db-cde7b.appspot.com",
  messagingSenderId: "397716618767",
  appId: "1:397716618767:web:fc0c28b23c31ddc6b8ed7a",
  measurementId: "G-ZSZT38KFD0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYHNnp1Jp-dSKwln9NbvcKCC5SAXsZ6Ms',
  authDomain: 'messaging-app-d6fac.firebaseapp.com',
  projectId: 'messaging-app-d6fac',
  storageBucket: 'messaging-app-d6fac.appspot.com',
  messagingSenderId: '150386290700',
  appId: '1:150386290700:web:b4997a37f91afb13c5be29'
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

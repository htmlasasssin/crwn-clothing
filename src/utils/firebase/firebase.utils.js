import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNWvHlMxKM42mtajs0nH5-aYbZ5xz3mWM",
  authDomain: "crwn-clothing-db-7e148.firebaseapp.com",
  projectId: "crwn-clothing-db-7e148",
  storageBucket: "crwn-clothing-db-7e148.appspot.com",
  messagingSenderId: "393555582048",
  appId: "1:393555582048:web:b8c8910164e2978da57705"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithProviderEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }catch (error) {
      console.log('error creating the user', error.message);
    }

  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
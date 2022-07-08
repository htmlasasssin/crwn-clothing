import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
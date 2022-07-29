// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB27auWPoMHraH02ZnrPEyOR6_ORwNs_Cw',
  authDomain: 'personal-proyect-e1cfe.firebaseapp.com',
  projectId: 'personal-proyect-e1cfe',
  storageBucket: 'personal-proyect-e1cfe.appspot.com',
  messagingSenderId: '640828443313',
  appId: '1:640828443313:web:3c3794dd410cfaebb7f090'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()

export const LoginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

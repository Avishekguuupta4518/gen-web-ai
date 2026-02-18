// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-4f5cb.firebaseapp.com",
  projectId: "genwebai-4f5cb",
  storageBucket: "genwebai-4f5cb.firebasestorage.app",
  messagingSenderId: "65128347923",
  appId: "1:65128347923:web:94cdd82afc88fc3a6742e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_hCmYVHQd49fm3tfZkdmti3mg63Fe1IQ",
  authDomain: "pm-systemdb.firebaseapp.com",
  projectId: "pm-systemdb",
  storageBucket: "pm-systemdb.appspot.com",
  messagingSenderId: "1057234808264",
  appId: "1:1057234808264:web:cf04d496ca7a266077e4fd",
  measurementId: "G-KPVGEWSR70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance

export { db, auth };

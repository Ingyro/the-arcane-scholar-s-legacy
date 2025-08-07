import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import if you plan to use Firestore for game data

// --- Firebase Configuration ---
// This section handles loading Firebase config based on the environment.
// When running locally, you'll use the 'localFirebaseConfig'.
// When running in the Canvas environment, '__firebase_config' will be provided.

// Your LOCAL Firebase project configuration (replace with your actual values from Firebase Console)
const localFirebaseConfig = {
  apiKey: "AIzaSyARajg1PBZ0n8gyWrrpWynr8298-pmm0l4",
  authDomain: "arcane-scholars-legacy.firebaseapp.com",
  projectId: "arcane-scholars-legacy",
  storageBucket: "arcane-scholars-legacy.firebasestorage.app",
  messagingSenderId: "976593685731",
  appId: "1:976593685731:web:bfa95e8221f0b76f27c9d6",
  measurementId: "G-W3VDVWF7LF"
};

// Determine which Firebase config to use
const firebaseConfig = typeof __firebase_config !== 'undefined' && Object.keys(JSON.parse(__firebase_config)).length > 0
  ? JSON.parse(__firebase_config) // Use Canvas-provided config if available and not empty
  : localFirebaseConfig;           // Otherwise, use your local config

// These are still provided by the Canvas environment, keep them as is.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let app;
let auth;
let db;

console.log('main.js: Starting Firebase initialization process...');
console.log('main.js: Using firebaseConfig:', firebaseConfig);

// Initialize Firebase only if config is available and valid
if (firebaseConfig && Object.keys(firebaseConfig).length > 0 && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app); // Initialize Firestore if you plan to use it
    console.log('Firebase initialized successfully.');
  } catch (e) {
    console.error('Failed to initialize Firebase:', e);
    // You might want to display a user-friendly error message here
  }
} else {
  console.warn('Firebase configuration is missing or placeholder. Firebase will not be fully initialized.');
  console.warn('Please replace "YOUR_FIREBASE_API_KEY", "YOUR_PROJECT_ID", etc., with your actual Firebase project credentials for local development.');
}


// Function to handle Firebase authentication
async function initializeFirebaseAuth() {
  if (!auth) {
    console.warn('Firebase Auth not initialized, skipping authentication.');
    return;
  }
  try {
    if (initialAuthToken) {
      await signInWithCustomToken(auth, initialAuthToken);
      console.log('Signed in with custom token.');
    } else {
      // If no custom token, sign in anonymously (useful for public data access or initial state)
      await signInAnonymously(auth);
      console.log('Signed in anonymously.');
    }
  } catch (error) {
    console.error('Firebase authentication error:', error);
  }
}

// Create the Vue app instance
const vueApp = createApp(App);

// Make Firebase instances globally available (optional, but convenient for some setups)
// You can also pass them down as props or use provide/inject
vueApp.config.globalProperties.$auth = auth;
vueApp.config.globalProperties.$db = db; // If using Firestore

// Before mounting the app, ensure Firebase Auth is initialized
initializeFirebaseAuth().then(() => {
  vueApp.mount('#app');
});

// You can also set up an auth state listener here if needed for global state management
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User is signed in:", user.uid);
//   } else {
//     console.log("No user is signed in.");
//   }
// });

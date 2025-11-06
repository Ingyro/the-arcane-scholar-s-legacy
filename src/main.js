import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 🚨 CHARTING IMPORTS and CONNECTION MODIFICATION 🚨
import VueChartkick from 'vue-chartkick'
// 1. Import Chart from chart.js
import Chart from 'chart.js/auto' // Use 'chart.js/auto' for automatic registration of scales, elements, and charts

// 2. Explicitly connect Chart.js to Chartkick's global adapter
VueChartkick.addAdapter(Chart);


// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// --- Firebase Configuration ---
const localFirebaseConfig = {
  apiKey: "AIzaSyARajg1PBZ0n8gyWrrpWynr8298-pmm0l4",
  authDomain: "arcane-scholars-legacy.firebaseapp.com",
  projectId: "arcane-scholars-legacy",
  storageBucket: "arcane-scholars-legacy.firebasestorage.app",
  messagingSenderId: "976593685731",
  appId: "1:976593685731:web:bfa95e8221f0b76f27c9d6",
  measurementId: "G-W3VDVWF7LF"
};

const firebaseConfig = typeof __firebase_config !== 'undefined' && Object.keys(JSON.parse(__firebase_config)).length > 0
  ? JSON.parse(__firebase_config) 
  : localFirebaseConfig;           

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
    db = getFirestore(app);
    console.log('Firebase initialized successfully.');
  } catch (e) {
    console.error('Failed to initialize Firebase:', e);
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
    } 
    // By removing the 'else { signInAnonymously() }' block,
    // the app will wait for a real login if no token is provided.
    
  } catch (error) {
    console.error('Firebase authentication error:', error);
  }
}

// Create the Vue app instance
const vueApp = createApp(App);

// 3. REGISTER CHARTKICK GLOBALLY (This remains the same)
vueApp.use(VueChartkick);

// Make Firebase instances globally available 
vueApp.config.globalProperties.$auth = auth;
vueApp.config.globalProperties.$db = db; 

// Before mounting the app, ensure Firebase Auth is initialized
initializeFirebaseAuth().then(() => {
  vueApp.mount('#app');
});
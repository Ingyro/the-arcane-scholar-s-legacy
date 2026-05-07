import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. Keep the necessary imports from the bottom section 
// (Check if you are actually using Chartkick and AutoclickerDetector)
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js/auto'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Explicitly connect Chart.js to Chartkick
VueChartkick.addAdapter(Chart);

// 2. KEEP YOUR CLEAN CONFIG (The top part)
// Never use the hardcoded 'localFirebaseConfig' aider created
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// 3. Initialize the apps using your clean config
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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
  
  // Initialize Autoclicker Detection System
  const detector = new AutoclickerDetector({ maxClicksPerSecond: 15 });
  detector.start();
});

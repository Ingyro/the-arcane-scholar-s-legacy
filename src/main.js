import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js/auto'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth'; // Added signInWithCustomToken here
import { getFirestore } from 'firebase/firestore'; 

// Import Autoclicker Detector (Ensure this path is correct!)
import { AutoclickerDetector } from './utils/gameUtils';

VueChartkick.addAdapter(Chart);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// 1. Declare variables ONCE using let
let app;
let auth;
let db;

const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

console.log('main.js: Starting Firebase initialization process...');

// 2. Initialize inside the check
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('Firebase initialized successfully.');
  } catch (e) {
    console.error('Failed to initialize Firebase:', e);
  }
} else {
  console.warn('Firebase configuration is missing or placeholder.');
}

async function initializeFirebaseAuth() {
  if (!auth) return;
  try {
    if (initialAuthToken) {
      await signInWithCustomToken(auth, initialAuthToken);
      console.log('Signed in with custom token.');
    }
  } catch (error) {
    console.error('Firebase authentication error:', error);
  }
}

const vueApp = createApp(App);
vueApp.use(VueChartkick);

// Make Firebase instances globally available 
vueApp.config.globalProperties.$auth = auth;
vueApp.config.globalProperties.$db = db; 

initializeFirebaseAuth().then(() => {
  vueApp.mount('#app');
  
  // Initialize Autoclicker Detection System
  try {
    const detector = new AutoclickerDetector({ maxClicksPerSecond: 15 });
    detector.start();
  } catch (e) {
    console.error("Autoclicker detector failed to start:", e);
  }
});
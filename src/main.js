import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0HqjvXqJqJqJqJqJqJqJqJqJqJqJqJqJ",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const vueApp = createApp(App);

// Provide Firebase instances globally if needed, or pass via props
vueApp.config.globalProperties.$auth = auth;
vueApp.config.globalProperties.$db = db;

vueApp.mount('#app');

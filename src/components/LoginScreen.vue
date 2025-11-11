<template>
  <!-- Updated to a clean Black & White (Light) theme -->
  <div class="flex flex-col items-center justify-center h-screen bg-white p-4 sm:p-6 md:p-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-black mb-6 text-center">The Arcane Scholar’s Legacy</h1>

    <!-- Login Buttons Container -->
    <div class="flex flex-col space-y-4 w-full max-w-sm">
      <button v-if="!loading"
              @click="handleGoogleLogin"
              class="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg">
        <img src="https://www.google.com/favicon.ico" alt="Google Logo" class="h-7 w-7 mr-3" />
        Sign in with Google
      </button>
    </div>

    <!-- Loading Indicator (Now a prominent logo display) -->
    <div v-if="loading" class="mt-12 flex flex-col items-center justify-center text-gray-600">
      <!-- Increased size and added a subtle bounce animation for effect -->
      <img src="/src/assets/logo.svg" alt="The Arcane Scholar's Legacy" class="h-24 w-24 mb-4 animate-bounce" />
      <p class="text-xl font-medium">Authenticating and Loading...</p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-6 text-red-600 bg-red-100 p-3 rounded-md">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import Firebase authentication functions and providers
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Define reactive state variables for loading and error messages
const loading = ref(false);
const error = ref(null);

// Define emits for parent component communication (e.g., successful login)
const emit = defineEmits(['successfulLogin']);

// Function to handle Google login
const handleGoogleLogin = async () => {
  loading.value = true; // Set loading to true
  error.value = null; // Clear any previous errors

  try {
    const auth = getAuth(); // Get the Firebase Auth instance
    const provider = new GoogleAuthProvider(); // Create a new Google Auth Provider
    const result = await signInWithPopup(auth, provider); // Sign in with Google popup

    const user = result.user;
    console.log('Google Login successful:', user);

    // --- MANDATORY 2-SECOND DELAY TO DISPLAY LOGO ---
    // Wait for 2000 milliseconds (2 seconds) before continuing.
    await new Promise(resolve => setTimeout(resolve, 2000));
    // ------------------------------------------------

    // Emit an event after the delay to signal successful login
    emit('successfulLogin', user);

  } catch (err) {
    console.error('Google Login error:', err);
    // Display a user-friendly error message immediately on failure
    error.value = `Google Login failed: ${err.message}`;
  } finally {
    // Set loading to false after the delay (on success) or immediately (on failure)
    loading.value = false;
  }
};
</script>

<style scoped>
/* Define a simple bounce animation for the logo */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
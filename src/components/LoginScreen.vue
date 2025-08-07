<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">The Arcane Scholar’s Legacy</h1>

    <!-- Login Buttons Container -->
    <div class="flex flex-col space-y-4 w-full max-w-sm">
      <button @click="handleGoogleLogin"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg">
        <img src="https://www.google.com/favicon.ico" alt="Google Logo" class="h-7 w-7 mr-3" />
        Sign in with Google
      </button>

      <!-- Facebook login button removed as requested -->
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="mt-6 text-gray-600">
      <p>Loading...</p>
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
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // FacebookAuthProvider removed

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

    // You can access user information from the result
    const user = result.user;
    console.log('Google Login successful:', user);

    // Emit an event to the parent component (App.vue) to signal successful login
    emit('successfulLogin', user);
  } catch (err) {
    console.error('Google Login error:', err);
    // Display a user-friendly error message
    error.value = `Google Login failed: ${err.message}`;
  } finally {
    loading.value = false; // Set loading to false after operation completes
  }
};

// handleFacebookLogin function removed as requested
</script>

<style scoped>
/*
  No custom CSS needed here as Tailwind CSS utility classes are used directly in the template.
  If you need very specific, complex styles that Tailwind doesn't easily provide, you can
  add them here. The 'scoped' attribute ensures these styles only apply to this component.
*/
</style>
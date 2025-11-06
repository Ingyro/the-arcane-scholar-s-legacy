<template>
  <div id="app">
    <!-- Show Loading State while waiting for auth status -->
    <div v-if="!isAuthReady" class="flex items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 text-3xl font-serif">
      Loading...
    </div>

    <!-- NEW: Account Upgrade Screen -->
    <!-- This new block catches anonymous users and forces them to link. -->
    <div v-else-if="currentView === 'accountUpgrade'" 
         class="flex flex-col items-center justify-center h-screen w-full bg-white text-gray-800 p-8">
      <h2 class="text-3xl font-serif text-black mb-4">Account Update Required</h2>
      <p class="text-lg text-gray-700 mb-8 max-w-lg text-center">
        To protect your progress, please link your anonymous account to a Google account.
        This is a one-time process.
      </p>
      <button @click="linkAccount"
              class="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg">
        <img src="https://www.google.com/favicon.ico" alt="Google Logo" class="h-7 w-7 mr-3" />
        Link with Google
      </button>
      <!-- Shows errors if linking fails -->
      <p v-if="upgradeError" class="mt-6 text-red-600 bg-red-100 p-3 rounded-md">{{ upgradeError }}</p>
    </div>

    <!-- Render different views based on the 'currentView' state -->
    <div v-else>
      <LoginScreen v-if="currentView === 'login'" />

      <CharacterSelectionView
        v-else-if="currentView === 'characterSelection'"
        :key="`selection-${user.uid}`"
        @character-selected="handleCharacterSelected"
        @startNewCharacterCreation="handleStartNewCharacterCreation"
      />

      <CharacterManager
        v-else-if="currentView === 'characterCreation'"
        :key="`creation-${user.uid}`"
        @character-created="handleCharacterCreated"
        @return-to-select="handleReturnToCharacterSelect"
      />

      <MainGameComponent
        v-else-if="currentView === 'game'"
        :key="`game-${selectedCharacterId}`"
        :userId="user.uid"
        :characterId="selectedCharacterId"
        @returnToCharacterSelect="handleReturnToCharacterSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
// MODIFIED: Import functions for account linking
import { getAuth, onAuthStateChanged, linkWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import all components used in the template
import LoginScreen from './components/LoginScreen.vue';
import CharacterManager from './components/CharacterManager.vue';
import CharacterSelectionView from './components/CharacterSelectionView.vue';
import MainGameComponent from './components/MainGameComponent.vue';

// --- Firebase Setup ---
// The Firebase app is already initialized in main.js. We just need to get the service instances.
const auth = getAuth();
const db = getFirestore();

// --- Reactive State ---
const user = ref(null);
const isAuthReady = ref(false);
const selectedCharacterId = ref(null);
const currentView = ref('loading'); // State variable to manage the view
const upgradeError = ref(null); // NEW: State for linking errors

// --- Auth State Listener ---
onMounted(() => {
  onAuthStateChanged(auth, (authUser) => {
    user.value = authUser;
    isAuthReady.value = true;
    console.log("App.vue: Auth state changed. User:", authUser ? authUser.uid : 'None');
    console.log("App.vue: Is app ready?", isAuthReady.value);

    // Log anonymous status for debugging
    if (authUser) {
      console.log("App.vue: Is user anonymous?", authUser.isAnonymous);
    }
  });
});

// MODIFIED: Watcher now checks for anonymous users
watch([user, isAuthReady, selectedCharacterId], ([newUser, isReady, selectedId]) => {
  if (isReady) {
    if (!newUser) {
      // Case 1: No user is logged in at all.
      currentView.value = 'login';
    } else if (newUser.isAnonymous) {
      // Case 2: User is logged in, but is ANONYMOUS.
      // Force them to the 'accountUpgrade' view.
      currentView.value = 'accountUpgrade';
    } else if (selectedId) {
      // Case 3: User is NOT anonymous (i.e., Google) and has a character selected.
      currentView.value = 'game';
    } else {
      // Case 4: User is NOT anonymous (i.e., Google) and has NO character selected.
      currentView.value = 'characterSelection';
    }
  }
});

// NEW: Function to handle linking the account
const linkAccount = async () => {
  upgradeError.value = null;
  if (!auth.currentUser || !auth.currentUser.isAnonymous) {
    upgradeError.value = "No anonymous account found to link.";
    return;
  }

  try {
    const provider = new GoogleAuthProvider();
    const result = await linkWithPopup(auth.currentUser, provider);
    
    // Success! 
    // The 'onAuthStateChanged' listener will automatically fire again
    // with the new, non-anonymous user. The 'watch' block will
    // then see 'isAnonymous' is false and move them to 'characterSelection'.
    console.log("Account linked successfully!", result.user);
    
  } catch (error) {
    console.error("Error linking account:", error);
    // Handle specific error where Google account is already in use
    if (error.code === 'auth/credential-already-in-use') {
      upgradeError.value = "This Google account is already linked to another scholar. Please use a different Google account.";
    } else {
      upgradeError.value = `Failed to link account: ${error.message}`;
    }
  }
};

// --- Event Handlers from Child Components ---
// (These handlers remain unchanged)
const handleCharacterSelected = (characterId) => {
  selectedCharacterId.value = characterId;
  currentView.value = 'game';
  console.log('App.vue: Character selected with ID:', characterId);
};

const handleStartNewCharacterCreation = () => {
  currentView.value = 'characterCreation';
  console.log('App.vue: Starting new character creation. `currentView` is now:', currentView.value);
};

const handleCharacterCreated = (characterId) => {
  selectedCharacterId.value = characterId;
  currentView.value = 'game';
  console.log('App.vue: New character created with ID:', characterId);
};

const handleReturnToCharacterSelect = () => {
  selectedCharacterId.value = null;
  currentView.value = 'characterSelection';
  console.log('App.vue: Returning to character selection.');
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #0d011a;
}
</style>
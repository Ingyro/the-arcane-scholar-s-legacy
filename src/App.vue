<template>
  <div id="app">
    <!-- Show Loading State while waiting for auth status -->
    <div v-if="!isAuthReady" class="flex items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 text-3xl font-serif">
      Loading...
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
const currentView = ref('loading'); // New state variable to manage the view

// --- Auth State Listener ---
onMounted(() => {
  onAuthStateChanged(auth, (authUser) => {
    user.value = authUser;
    isAuthReady.value = true;
    console.log("App.vue: Auth state changed. User:", authUser ? authUser.uid : 'None');
    console.log("App.vue: Is app ready?", isAuthReady.value);
  });
});

// Watch for changes to the user and selectedCharacterId to determine the correct view
watch([user, isAuthReady, selectedCharacterId], ([newUser, isReady, selectedId]) => {
  if (isReady) {
    if (!newUser) {
      currentView.value = 'login';
    } else if (selectedId) {
      currentView.value = 'game';
    } else {
      currentView.value = 'characterSelection';
    }
  }
});

// --- Event Handlers from Child Components ---
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

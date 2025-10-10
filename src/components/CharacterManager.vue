<template>
  <div class="flex flex-col items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 p-4 sm:p-6 md:p-8 overflow-y-auto">
    <h2 class="text-4xl font-serif text-yellow-100 mb-8 text-center leading-tight">Forge Your Legacy</h2>

    <!-- Loading/Error Display -->
    <div v-if="loading" class="mt-4 text-yellow-400">Loading...</div>
    <div v-if="error" class="mt-4 text-red-500 bg-red-100 p-3 rounded-md">{{ error }}</div>

    <div v-if="!loreLoaded" class="w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700 text-center">
      <p class="text-lg text-yellow-300">Loading lore...</p>
    </div>

    <!-- Step 1: Read Chapter 1 & Select Faction -->
    <div v-else-if="currentStep === 'chapter1' || currentStep === 'factionSelect'" class="w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Chapter 1: The First Whisper</h3>
      <div v-html="lore.chapter1" class="text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"></div>
      
      <div class="space-y-4">
        <button @click="currentStep = 'factionSelect'" v-if="currentStep === 'chapter1'"
                class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out">
          Continue to Faction Selection
        </button>

        <div v-if="currentStep === 'factionSelect'" class="space-y-4 mt-6">
          <button @click="selectFaction('Lumen')"
                  :class="['w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out',
                           newCharacter.faction === 'Lumen' ? 'bg-blue-600 text-white shadow-xl' : 'bg-violet-800 hover:bg-blue-500 text-yellow-100']">
            Select Lumen
          </button>
          <button @click="selectFaction('Umbra')"
                  :class="['w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out',
                           newCharacter.faction === 'Umbra' ? 'bg-purple-600 text-white shadow-xl' : 'bg-violet-800 hover:bg-purple-500 text-yellow-100']">
            Select Umbra
          </button>
          <button @click="goToNextStep" :disabled="!newCharacter.faction"
                  class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
            Proceed
          </button>
          <button @click="currentStep = 'chapter1'" class="w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out">
            Go Back
          </button>
        </div>
      </div>
    </div>

    <!-- Step 2: Read Chapter 2 & Select Specialty -->
    <div v-else-if="currentStep === 'chapter2' || currentStep === 'specialtySelect'" class="w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">The Second Whisper</h3>
      <div v-html="lore.chapter2" class="text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"></div>
      
      <div class="space-y-4">
        <button @click="currentStep = 'specialtySelect'" v-if="currentStep === 'chapter2'"
                class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out">
          Continue to Specialty Selection
        </button>

        <div v-if="currentStep === 'specialtySelect'" class="space-y-4 mt-6">
          <button @click="selectSpecialty('Arcane')"
                  :class="['w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out',
                           newCharacter.specialty === 'Arcane' ? 'bg-cyan-600 text-white shadow-xl' : 'bg-violet-800 hover:bg-cyan-500 text-yellow-100']">
            Select Arcane
          </button>
          <button @click="selectSpecialty('Alchemist')"
                  :class="['w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out',
                           newCharacter.specialty === 'Alchemist' ? 'bg-amber-600 text-white shadow-xl' : 'bg-violet-800 hover:bg-amber-500 text-yellow-100']">
            Select Alchemist
          </button>
          <button @click="goToNextStep" :disabled="!newCharacter.specialty"
                  class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
            Proceed
          </button>
          <button @click="currentStep = 'chapter1'" class="w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out">
            Go Back
          </button>
        </div>
      </div>
    </div>

    <!-- Step 3: Assign Name and Create Character -->
    <div v-else-if="currentStep === 'nameAssign'" class="w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Assign Your Scholar Name</h3>
      <p class="text-lg text-yellow-300 mb-4">
        Name your scholar, choose wisely as this name will define your legacy.
      </p>
      <p class="text-sm text-yellow-400 mb-4 italic">
        Faction: {{ newCharacter.faction }} | Specialty: {{ newCharacter.specialty }}
      </p>
      <form @submit.prevent="createCharacter" class="space-y-4">
        <div>
          <label for="characterName" class="block text-lg text-yellow-300 mb-2">Scholar's Name:</label>
          <input
            id="characterName"
            v-model="newCharacter.name"
            type="text"
            required
            class="w-full p-3 rounded-lg bg-gray-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter a name"
          />
        </div>
        <button
          type="submit"
          :disabled="!newCharacter.name"
          class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
          Forge Legacy
        </button>
      </form>
      <button @click="currentStep = 'specialtySelect'" class="w-full py-2 px-4 mt-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out">
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const emit = defineEmits(['character-created', 'return-to-select']);

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// State for loading, error, and UI steps
const loading = ref(false);
const error = ref(null);
const currentStep = ref('chapter1');
const lore = ref({ chapter1: '', chapter2: '' });
const loreLoaded = ref(false);

// Character data
const newCharacter = ref({
  name: '',
  faction: '',
  specialty: '',
  knowledge: 0,
  resources: {},
  research: {},
});

// Fetch and parse the lore from the public directory
const fetchLore = async () => {
  try {
    const response1 = await fetch('/the-arcane-scholar-s-legacy/Chapter1.txt');
    if (!response1.ok) {
      throw new Error('Failed to fetch Chapter1.txt.');
    }
    const text1 = await response1.text();
    lore.value.chapter1 = text1.trim();
    console.log('Successfully read Chapter1.txt.');

    const response2 = await fetch('/the-arcane-scholar-s-legacy/Chapter2.txt');
    if (!response2.ok) {
      throw new Error('Failed to fetch Chapter2.txt.');
    }
    const text2 = await response2.text();
    lore.value.chapter2 = text2.trim();
    console.log('Successfully read Chapter2.txt.');

    loreLoaded.value = true;
  } catch (err) {
    console.error('Error fetching lore:', err);
    error.value = 'Failed to load game lore. Please try again later.';
  }
};

onMounted(() => {
  fetchLore();
});

// UI Logic
const selectFaction = (faction) => {
  newCharacter.value.faction = faction;
};

const selectSpecialty = (specialty) => {
  newCharacter.value.specialty = specialty;
};

const goToNextStep = () => {
  if (currentStep.value === 'factionSelect') {
    currentStep.value = 'chapter2';
  } else if (currentStep.value === 'specialtySelect') {
    currentStep.value = 'nameAssign';
  }
};

// Character Creation Logic
const createCharacter = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    error.value = "User not authenticated. Please log in again.";
    return;
  }
  if (!newCharacter.value.name) {
    error.value = "Please enter a name for your scholar.";
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    const characterCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/characters`);
    const docRef = await addDoc(characterCollectionRef, newCharacter.value);
    console.log("New character created with ID:", docRef.id);
    emit('character-created', docRef.id);
  } catch (err) {
    console.error("Error creating character:", err);
    error.value = `Failed to create character: ${err.message}`;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col h-screen w-full bg-gray-950 text-yellow-300 font-sans overflow-hidden">
    <!-- Game Header -->
    <header class="flex items-center justify-between p-4 bg-violet-900 shadow-lg border-b border-yellow-600">
      <h1 class="text-3xl font-serif text-yellow-100 tracking-wide">The Arcane Scholar’s Legacy</h1>
      <div class="flex items-center space-x-4">
        <span class="text-lg text-yellow-300">Knowledge: <span class="font-bold text-yellow-100 text-2xl">{{ knowledge.toFixed(2) }}</span></span>

        <!-- Save Progress Button -->
        <button @click="saveGameProgress"
                :disabled="saving"
                class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
          {{ saving ? 'Saving...' : 'Save Progress' }}
        </button>

        <!-- Back to Characters Button -->
        <button @click="returnToCharacterSelect"
                class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Back to Characters
        </button>

        <!-- Logout Button -->
        <button @click="handleLogout"
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Log Out
        </button>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="flex flex-1 overflow-hidden bg-gray-950">
      <!-- Sidebar / Main Menu -->
      <nav class="w-1/5 min-w-[180px] bg-violet-950 p-4 border-r border-yellow-600 flex flex-col space-y-3">
        <h3 class="text-xl font-serif text-yellow-100 mb-4 border-b border-yellow-700 pb-2">Sanctum Menu</h3>
        <button v-for="menuItem in menuItems" :key="menuItem.id"
                @click="activeMenu = menuItem.id"
                :class="['text-left px-4 py-2 rounded-lg transition duration-200 ease-in-out',
                         activeMenu === menuItem.id ? 'bg-green-800 text-yellow-500 shadow-inner' : 'hover:bg-violet-800 text-yellow-300']">
          {{ menuItem.name }}
        </button>
      </nav>

      <!-- Content Display Area -->
      <main class="flex-1 p-6 overflow-y-auto custom-scrollbar">
        <!-- Dynamically render the active view component -->
        <SanctumView
          v-if="activeMenu === 'sanctum'"
          :knowledge="knowledge"
          :multiplierItems="multiplierItems"
          :passiveKnowledgeGain="passiveKnowledgeGain"
          @generate-knowledge="generateKnowledge"
          @buy-multiplier="buyMultiplier"
        />
        <ResearchView v-else-if="activeMenu === 'research'" />
        <ExpeditionsView v-else-if="activeMenu === 'expeditions'" />
        <InventoryView v-else-if="activeMenu === 'inventory'" />
        <SkillTreeView v-else-if="activeMenu === 'skill-tree'" />
        <ClassificationView v-else-if="activeMenu === 'classification'" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'; // Import Timestamp
import { defineProps, defineEmits } from 'vue';

// Import the new view components
import SanctumView from './SanctumView.vue';
import ResearchView from './ResearchView.vue';
import ExpeditionsView from './ExpeditionsView.vue';
import InventoryView from './InventoryView.vue';
import SkillTreeView from './SkillTreeView.vue';
import ClassificationView from './ClassificationView.vue';

// Define props that this component expects from its parent (App.vue)
const props = defineProps({
  userId: {
    type: String,
    required: true
  },
  characterId: {
    type: String,
    required: true
  }
});

// Define events this component can emit to its parent (App.vue)
const emit = defineEmits(['returnToCharacterSelect']);

console.log('MainGameComponent: Component setup started.');

// --- Reactive State for Game Data ---
const knowledge = ref(0);
const activeMenu = ref('sanctum'); // Default active menu item
const saving = ref(false); // New state for save button loading indicator

// Multiplier item data structure
const multiplierItems = ref({
  arcaneConduits: { level: 0, baseCost: 10, costMultiplier: 1.15, baseEffect: 0.1, effectMultiplier: 1.05, name: 'Arcane Conduit' },
  ancientScrolls: { level: 0, baseCost: 50, costMultiplier: 1.2, baseEffect: 0.5, effectMultiplier: 1.08, name: 'Ancient Scroll' },
  ethericCrystals: { level: 0, baseCost: 200, costMultiplier: 1.25, baseEffect: 2, effectMultiplier: 1.1, name: 'Etheric Crystal' },
  celestialOrbs: { level: 0, baseCost: 1000, costMultiplier: 1.3, baseEffect: 10, effectMultiplier: 1.12, name: 'Celestial Orb' },
});

// --- Firebase Instances ---
const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- Computed Properties ---

// Calculates the total passive knowledge gain per second
const passiveKnowledgeGain = computed(() => {
  let totalGain = 0;
  for (const key in multiplierItems.value) {
    const item = multiplierItems.value[key];
    if (item.level > 0) {
      const currentEffect = item.baseEffect * Math.pow(item.effectMultiplier, item.level - 1);
      totalGain += currentEffect;
    }
  }
  return totalGain;
});

// --- Game Logic Functions ---

// Function for the "Generate Knowledge" button click (base gain)
const generateKnowledge = () => {
  knowledge.value += 1; // Base knowledge gain per click
  console.log('Knowledge generated (click):', knowledge.value);
};

// Function to calculate the cost for the next level of a multiplier item
const getNextLevelCost = (itemKey) => {
  const item = multiplierItems.value[itemKey];
  if (!item) return Infinity;
  return item.baseCost * Math.pow(item.costMultiplier, item.level);
};

// Function to buy a multiplier item level
const buyMultiplier = (itemKey) => {
  const item = multiplierItems.value[itemKey];
  if (!item) {
    console.error('Invalid multiplier item key:', itemKey);
    return;
  }

  const cost = getNextLevelCost(itemKey);
  if (knowledge.value >= cost) {
    knowledge.value -= cost;
    item.level += 1;
    console.log(`Bought ${item.name} level ${item.level}. Knowledge remaining: ${knowledge.value.toFixed(2)}`);
    saveGameProgress(); // Trigger a save after purchase
  } else {
    console.warn(`Not enough knowledge to buy ${item.name}. Needed: ${cost.toFixed(2)}, Have: ${knowledge.value.toFixed(2)}`);
  }
};

// Function to save game progress to Firestore
const saveGameProgress = async () => {
  saving.value = true;
  try {
    const user = auth.currentUser;
    if (!user || !props.characterId) {
      console.error('Save failed: User not authenticated or character not selected.');
      return;
    }

    const characterDocRef = doc(db, `artifacts/${appId}/users/${user.uid}/characters`, props.characterId);

    await setDoc(characterDocRef, {
      knowledge: knowledge.value,
      multiplierItems: JSON.parse(JSON.stringify(multiplierItems.value)),
      lastSaved: Timestamp.now(), // Save current timestamp
    }, { merge: true });

    console.log('Game progress saved successfully for character:', props.characterId);
  } catch (error) {
    console.error('Error saving game progress:', error);
  } finally {
    saving.value = false;
  }
};

// Function to load game progress from Firestore
const loadGameProgress = async () => {
  try {
    const user = auth.currentUser;
    if (!user || !props.characterId) {
      console.warn('Load skipped: User not authenticated or character not selected.');
      return;
    }

    const characterDocRef = doc(db, `artifacts/${appId}/users/${user.uid}/characters`, props.characterId);
    const docSnap = await getDoc(characterDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      knowledge.value = data.knowledge || 0;

      if (data.multiplierItems) {
        for (const key in multiplierItems.value) {
          if (data.multiplierItems[key]) {
            multiplierItems.value[key].level = data.multiplierItems[key].level || 0;
          }
        }
      }

      // --- OFFLINE PROGRESS CALCULATION ---
      if (data.lastSaved && passiveKnowledgeGain.value > 0) {
        const lastSavedDate = data.lastSaved.toDate(); // Convert Firestore Timestamp to Date object
        const now = new Date();
        const timeElapsedSeconds = (now.getTime() - lastSavedDate.getTime()) / 1000; // Time in seconds

        if (timeElapsedSeconds > 0) {
          const offlineGain = timeElapsedSeconds * passiveKnowledgeGain.value;
          knowledge.value += offlineGain;
          console.log(`Offline gain for ${props.characterId}: ${offlineGain.toFixed(2)} knowledge over ${timeElapsedSeconds.toFixed(0)} seconds.`);
        }
      }
      // --- END OFFLINE PROGRESS CALCULATION ---

      console.log('Game progress loaded for character:', props.characterId, 'Knowledge:', knowledge.value, 'Multipliers:', multiplierItems.value);
    } else {
      console.log('No saved progress found for this character. Starting new game state.');
      knowledge.value = 0;
      for (const key in multiplierItems.value) {
        multiplierItems.value[key].level = 0;
      }
    }
  } catch (error) {
    console.error('Error loading game progress:', error);
  }
};

// --- Navigation Functions ---

// Function to handle user logout
const handleLogout = async () => {
  await saveGameProgress();
  try {
    await auth.signOut();
    console.log('MainGameComponent: User logged out successfully.');
  } catch (error) {
    console.error('MainGameComponent: Logout error:', error);
  }
};

// Function to return to character selection screen
const returnToCharacterSelect = async () => {
  await saveGameProgress();
  emit('returnToCharacterSelect');
  console.log('MainGameComponent: Returning to character selection.');
};

// --- Idle Game Logic ---
let knowledgeInterval = null;

onMounted(() => {
  loadGameProgress(); // Load game progress when the component is mounted

  knowledgeInterval = setInterval(() => {
    knowledge.value += passiveKnowledgeGain.value;
  }, 1000);
});

onUnmounted(async () => {
  if (knowledgeInterval) {
    clearInterval(knowledgeInterval);
  }
  await saveGameProgress();
});

// Menu items for navigation
const menuItems = [
  { id: 'sanctum', name: 'Sanctum / Home' },
  { id: 'research', name: 'Research' },
  { id: 'expeditions', name: 'Expeditions' },
  { id: 'inventory', name: 'Inventory' },
  { id: 'skill-tree', name: 'Skill Tree' },
  { id: 'classification', name: 'Classification' },
];
</script>

<style scoped>
/* Custom scrollbar for the main content area */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #2a0a3a; /* Deep violet */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a07d3a; /* Muted gold */
  border-radius: 10px;
  border: 3px solid #2a0a3a; /* Space around thumb */
}
</style>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-yellow-300 font-sans p-6">
    <div class="bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-2xl">
      <h2 class="text-4xl font-serif text-yellow-100 mb-6 text-center">Your Scholars</h2>

      <!-- Button to start new character creation -->
      <div class="bg-violet-800 p-6 rounded-lg shadow-inner mb-8">
        
        <!-- Character Limit Warning -->
        <p v-if="characterCount >= CHARACTER_LIMIT" 
           class="text-center text-lg text-red-400 font-bold mb-3 p-2 rounded-lg bg-red-900/50">
          Limit Reached ({{ CHARACTER_LIMIT }} Max): Delete a scholar to forge a new legacy.
        </p>

        <button @click="emit('startNewCharacterCreation')"
                :disabled="characterCount >= CHARACTER_LIMIT"
                class="w-full py-3 px-4 rounded-lg text-xl font-bold text-white shadow-lg transition-all duration-200 ease-in-out"
                :class="characterCount >= CHARACTER_LIMIT ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'">
          Forge a New Legacy
        </button>
      </div>

      <!-- Existing Characters Section -->
      <div class="bg-violet-800 p-6 rounded-lg shadow-inner">
        <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">
          Continue Your Legacy ({{ characters.length }} / {{ CHARACTER_LIMIT }})
        </h3>
        <p v-if="characters.length === 0" class="text-center text-sm text-yellow-400 italic">
          No scholars found. Forge your first one above!
        </p>
        <ul v-else class="space-y-4">
          <li v-for="character in characters" :key="character.id"
              class="flex items-center justify-between bg-violet-700 p-4 rounded-lg shadow-md transition duration-200 ease-in-out hover:bg-violet-600">
            <div @click="selectCharacter(character.id)" class="flex-grow cursor-pointer">
              <h3 class="text-2xl font-bold text-yellow-100">{{ character.name }}</h3>
              <p class="text-sm text-yellow-400">
                Faction: {{ character.faction }} | Specialty: {{ character.specialty }}
              </p>
            </div>
            <button @click.stop="confirmDeleteCharacter(character.id)"
                    class="ml-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Confirmation Modal for Deletion -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-md text-center">
        <h3 class="text-2xl font-bold text-yellow-100 mb-4">Confirm Deletion</h3>
        <p class="text-yellow-300 mb-6">Are you sure you want to delete this scholar? This action cannot be undone.</p>
        <div class="flex justify-center space-x-4">
          <button @click="deleteCharacter" class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg">Delete</button>
          <button @click="cancelDelete" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
    
    <!-- Custom Modal for Errors/Messages -->
    <div v-if="showErrorModal" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-red-900 p-8 rounded-xl shadow-2xl border border-red-700 w-full max-w-sm text-center">
        <h3 class="text-2xl font-bold text-red-300 mb-4">Error</h3>
        <p class="text-red-100 mb-6">{{ errorMessage }}</p>
        <button @click="showErrorModal = false" class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, getDocs, doc, deleteDoc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { defineEmits } from 'vue';

const emit = defineEmits(['characterSelected', 'startNewCharacterCreation']);

// --- CONSTANTS ---
const CHARACTER_LIMIT = 4;
// --- STATE ---
const characters = ref([]);
const characterCount = ref(0); // Tracks the count for the UI check and database sync
const showDeleteModal = ref(false);
const characterToDelete = ref(null);
const showErrorModal = ref(false);
const errorMessage = ref('');

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';


// --- USER PROFILE MANAGEMENT ---

// 1. Fetches the user's profile and count
const fetchUserProfileAndCount = async (userId) => {
  if (!userId) return;
  try {
    const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
    const docSnap = await getDoc(userDocRef);
    
    if (docSnap.exists()) {
      characterCount.value = docSnap.data().characterCount || 0;
    } else {
      // Create the profile document if it doesn't exist, initializing count to 0
      await setDoc(userDocRef, { characterCount: 0 }, { merge: true });
      characterCount.value = 0;
    }
    console.log(`Character count loaded: ${characterCount.value}`);

  } catch (error) {
    console.error("Error fetching or initializing user profile:", error);
  }
};


// 2. Function to fetch existing characters
const fetchCharacters = async (userId) => {
  if (!userId) return;
  try {
    const characterCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/characters`);
    const characterQuery = query(characterCollectionRef);
    const querySnapshot = await getDocs(characterQuery);
    characters.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // Double-check: ensure the UI count matches the actual number of documents
    characterCount.value = characters.value.length;
    
    // Safety check: if the document count is off, force update the profile count
    const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
    await updateDoc(userDocRef, { characterCount: characters.value.length }, { merge: true });

  } catch (error) {
    console.error("Error fetching characters:", error);
    errorMessage.value = "Failed to load characters. Please check your connection.";
    showErrorModal.value = true;
  }
};


// --- CHARACTER ACTIONS ---

// Function to handle character selection
const selectCharacter = (characterId) => {
  emit('characterSelected', characterId);
};

// Deletion confirmation logic
const confirmDeleteCharacter = (characterId) => {
  characterToDelete.value = characterId;
  showDeleteModal.value = true;
};

const cancelDelete = () => {
  showDeleteModal.value = false;
  characterToDelete.value = null;
};

// MODIFIED: Deletion logic now decrements the count
const deleteCharacter = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId || !characterToDelete.value) return;

  try {
    // 1. Delete the character document
    const characterDocRef = doc(db, `artifacts/${appId}/users/${userId}/characters`, characterToDelete.value);
    await deleteDoc(characterDocRef);
    
    // 2. Decrement the character counter in the user profile document
    const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
    await updateDoc(userDocRef, {
      characterCount: increment(-1)
    }, { merge: true });

    console.log("Character deleted successfully and count decremented.");
    showDeleteModal.value = false;
    characterToDelete.value = null;
    
    // 3. Refresh the list and the UI count
    await fetchCharacters(userId); 
    
  } catch (error) {
    console.error("Error deleting character:", error);
    errorMessage.value = `Failed to delete character: ${error.message}`;
    showErrorModal.value = true;
  }
};


// --- LIFECYCLE HOOKS ---

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await fetchUserProfileAndCount(user.uid);
      // Fetch characters after profile/count is initialized
      await fetchCharacters(user.uid); 
    }
  });
});
</script>

<style scoped>
/* Scoped styles are left empty as Tailwind is used for styling */
</style>

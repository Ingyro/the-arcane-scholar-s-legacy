<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-yellow-300 font-sans p-6">
    <div class="bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-2xl">
      <h2 class="text-4xl font-serif text-yellow-100 mb-6 text-center">Your Scholars</h2>

      <!-- Button to start new character creation -->
      <div class="bg-violet-800 p-6 rounded-lg shadow-inner mb-8">
        <button @click="emit('startNewCharacterCreation')"
                class="w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out">
          Forge a New Legacy
        </button>
      </div>

      <!-- Existing Characters Section -->
      <div class="bg-violet-800 p-6 rounded-lg shadow-inner">
        <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Continue Your Legacy</h3>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { defineEmits } from 'vue';

const emit = defineEmits(['characterSelected', 'startNewCharacterCreation']);

const characters = ref([]);
const showDeleteModal = ref(false);
const characterToDelete = ref(null);

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Function to fetch existing characters for the logged-in user
const fetchCharacters = async (userId) => {
  if (!userId) return;
  try {
    const characterCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/characters`);
    const characterQuery = query(characterCollectionRef);
    const querySnapshot = await getDocs(characterQuery);
    characters.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

// Function to handle character selection
const selectCharacter = (characterId) => {
  emit('characterSelected', characterId);
};

// Deletion logic
const confirmDeleteCharacter = (characterId) => {
  characterToDelete.value = characterId;
  showDeleteModal.value = true;
};

const cancelDelete = () => {
  showDeleteModal.value = false;
  characterToDelete.value = null;
};

const deleteCharacter = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId || !characterToDelete.value) return;

  try {
    const characterDocRef = doc(db, `artifacts/${appId}/users/${userId}/characters`, characterToDelete.value);
    await deleteDoc(characterDocRef);
    console.log("Character deleted successfully.");
    showDeleteModal.value = false;
    characterToDelete.value = null;
    await fetchCharacters(userId); // Refresh the list of characters
  } catch (error) {
    console.error("Error deleting character:", error);
    // You could add an error message to the UI here
  }
};

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      fetchCharacters(user.uid);
    }
  });
});
</script>

<style scoped>
/*
  No custom CSS needed here as Tailwind CSS utility classes are used directly in the template.
  The `scoped` attribute ensures these styles only apply to this component.
*/
</style>

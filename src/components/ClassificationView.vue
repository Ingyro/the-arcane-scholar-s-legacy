<template>
  <section :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder, 'p-6 rounded-lg shadow-xl border overflow-auto h-full', themeClasses.shadowColor]">
    
    <h2 class="text-3xl font-serif mb-6 border-b pb-3" 
        :class="[themeClasses.primaryText, themeClasses.accentBorder]">
        Classification: Global Scholars
    </h2>
    
    <p class="text-sm mt-4 mb-4" :class="themeClasses.primaryText">
      View the global rankings of all scholars. Use the controls below to filter and sort the data.
    </p>

    <div class="flex flex-wrap gap-4 mb-6 p-4 rounded-lg border" :class="[themeClasses.accentBorder, themeClasses.sidebarBg]">
      <div class="flex items-center space-x-2">
        <label for="filter-faction" class="font-bold text-sm">Faction:</label>
        <select id="filter-faction" v-model="filterFaction" class="p-2 rounded-md shadow-inner text-sm border"
                :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="">All Factions</option>
          <option value="Lumen">Lumen</option>
          <option value="Umbra">Umbra</option>
        </select>
      </div>

      <div class="flex items-center space-x-2">
        <label for="filter-specialty" class="font-bold text-sm">Specialty:</label>
        <select id="filter-specialty" v-model="filterSpecialty" class="p-2 rounded-md shadow-inner text-sm border"
                :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="">All Specialties</option>
          <option value="Arcane">Arcane</option>
          <option value="Alchemist">Alchemist</option>
        </select>
      </div>

      <div class="flex items-center space-x-2">
        <label for="filter-location" class="font-bold text-sm">Location:</label>
        <select id="filter-location" v-model="filterLocation" class="p-2 rounded-md shadow-inner text-sm border"
                :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="">All Locations</option>
          <option value="Aethelgard">Aethelgard</option>
          <option value="The Shadow Wastes">The Shadow Wastes</option>
          <option value="Great Library">Great Library</option>
          <option value="The Citadel">The Citadel</option>
          <option value="Hidden Village">Hidden Village</option>
        </select>
      </div>

      <div class="flex items-center space-x-2 ml-auto">
        <label for="sort-by" class="font-bold text-sm">Sort By:</label>
        <select id="sort-by" v-model="sortBy" class="p-2 rounded-md shadow-inner text-sm border"
                :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="prestige">Prestige (Default)</option>
          <option value="currentTierIndex">Tier</option>
          <option value="name">Name</option>
          <option value="faction">Faction</option>
          <option value="specialty">Specialty</option>
          <option value="location">Location</option>
        </select>
      </div>

      <button @click="toggleSortDirection"
              class="py-2 px-3 rounded-md text-sm font-bold shadow-md transition duration-200"
              :class="[sortDirection === 'desc' ? themeClasses.buttonUrgentBg : themeClasses.buttonBg, 
                       sortDirection === 'desc' ? themeClasses.buttonUrgentText : themeClasses.buttonText,
                       sortDirection === 'desc' ? themeClasses.buttonUrgentHover : themeClasses.buttonHover]">
        Sort: {{ sortDirection === 'desc' ? 'High to Low (⬇️)' : 'Low to High (⬆️)' }}
      </button>
    </div>

    <div v-if="loading" class="text-lg p-4 text-center" :class="themeClasses.primaryText">Loading global rankings...</div>
    <div v-else-if="error" class="text-lg text-red-500 bg-red-100 p-4 rounded-lg text-center">Error fetching rankings: {{ error }}</div>
    <div v-else-if="paginatedCharacters.length === 0" class="text-lg p-4 text-center rounded-lg" :class="themeClasses.primaryText">
        No scholars found matching the current filters.
    </div>

    <div v-else>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y" :class="themeClasses.accentBorder">
          <thead :class="[themeClasses.headerBg, themeClasses.headerText]">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Player</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Prestige</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Tier</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Faction</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Specialty</th>
              <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
            </tr>
          </thead>
          
          <tbody class="divide-y" :class="themeClasses.accentBorder">
            
            <tr v-for="char in paginatedCharacters" 
                :key="char.id"
                class="transition duration-150 ease-in-out"
                :class="[
                  char.id === currentCharacterId 
                    ? [themeClasses.activeMenuBg, themeClasses.activeMenuText, 'ring-2 ring-inset ring-yellow-400 font-bold'] 
                    : [themeClasses.sidebarBg, 'hover:opacity-80']
                ]">
              
              <td class="px-4 py-4 whitespace-nowrap text-sm font-medium">
                {{ char.actualRank }}
                <span v-if="char.id === currentCharacterId" class="ml-1 text-xs"> (You)</span>
              </td>
              
              <td class="px-4 py-4 whitespace-nowrap text-sm font-bold">{{ char.userName || 'Loading...' }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm font-medium">{{ char.name }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">{{ char.prestige }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">{{ (char.currentTierIndex || 0) + 1 }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">{{ char.faction }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">{{ char.specialty }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-xs">{{ char.location || char.userLocation || 'Unknown' }}</td>
            </tr>

          </tbody>
        </table>
      </div>
      
      <div v-if="totalPages > 1" class="flex justify-between items-center mt-6 p-4 rounded-lg border" :class="[themeClasses.accentBorder, themeClasses.sidebarBg]">
          <button @click="prevPage" 
                  :disabled="currentPage === 1"
                  class="py-2 px-4 rounded-lg font-bold transition duration-200"
                  :class="[currentPage === 1 
                          ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
                          : [themeClasses.buttonSecondaryBg, themeClasses.buttonSecondaryText, themeClasses.buttonSecondaryHover]]">
              &larr; Previous Page
          </button>

          <span class="text-sm font-semibold" :class="themeClasses.primaryText">
              Page {{ currentPage }} of {{ totalPages }} ({{ allRankedCharacters.length }} Scholars Total)
          </span>

          <button @click="nextPage" 
                  :disabled="currentPage === totalPages"
                  class="py-2 px-4 rounded-lg font-bold transition duration-200"
                  :class="[currentPage === totalPages 
                          ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
                          : [themeClasses.buttonSecondaryBg, themeClasses.buttonSecondaryText, themeClasses.buttonSecondaryHover]]">
              Next Page &rarr;
          </button>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { getAuth } from "firebase/auth";
import { getFirestore, collectionGroup, onSnapshot, query, doc, getDoc } from "firebase/firestore";

// --- Props ---
const props = defineProps({
  currentCharacterId: {
    type: String,
    default: null
  },
  themeClasses: { 
    type: Object, 
    required: true,
    default: () => ({ 
      primaryBg: 'bg-white',
      primaryText: 'text-black',
      headerBg: 'bg-gray-800',
      headerText: 'text-white',
      accentBorder: 'border-gray-400',
      sidebarBg: 'bg-gray-100',
      activeMenuBg: 'bg-gray-300',
      activeMenuText: 'text-black',
      shadowColor: 'shadow-gray-500/30',
      buttonBg: 'bg-blue-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-blue-700',
      buttonSecondaryBg: 'bg-gray-500',
      buttonSecondaryText: 'text-white',
      buttonSecondaryHover: 'hover:bg-gray-600',
      buttonUrgentBg: 'bg-red-600',
      buttonUrgentText: 'text-white',
      buttonUrgentHover: 'hover:bg-red-700',
      factionLumenColor: '#13c2eb', // Add fallback colors for chart data
      factionUmbraColor: '#611462',
    })
  }
});

// --- Constants ---
const DOMINANCE_WEIGHTS = {
    prestige: 3,
    tierSum: 2,
    count: 1,
};

const itemsPerPage = 10; // Set the fixed items per page

// --- Firebase Setup ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const db = getFirestore();
const auth = getAuth();

let unsubscribe;

// --- State ---
const characters = ref([]); 
const userProfileCache = ref({});
const loading = ref(true);
const error = ref(null);

// Filter States
const filterFaction = ref('');
const filterSpecialty = ref('');
const filterLocation = ref('');

// Sort States
const sortBy = ref('prestige');
const sortDirection = ref('desc'); 

// Pagination State
const currentPage = ref(1);

// --- User Profile Fetching Function (omitted for brevity) ---
const fetchUserProfileData = async (userId) => {
    if (userProfileCache.value[userId]) return userProfileCache.value[userId];
    try {
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const profile = {
                userName: data.username || data.name || 'Anonymous Scholar',
                userLocation: data.location || null 
            };
            userProfileCache.value[userId] = profile;
            return profile;
        }
    } catch (e) {
        console.warn(`Could not fetch profile for user ${userId}:`, e.message);
    }
    userProfileCache.value[userId] = { userName: 'Missing Profile', userLocation: null };
    return userProfileCache.value[userId];
};

// --- Firestore Data Fetching (omitted for brevity) ---
const fetchLeaderboard = () => {
  if (!auth.currentUser) {
    error.value = "You must be logged in to view the Classification.";
    loading.value = false;
    return;
  }
  
  const leaderboardCollectionRef = collectionGroup(db, 'leaderboard');
  const q = query(leaderboardCollectionRef);

  loading.value = true;
  error.value = null;

  unsubscribe = onSnapshot(q, async (snapshot) => {
    try {
      const newCharacters = [];
      const uniqueUserIds = new Set();
      
      snapshot.forEach((doc) => {
        const charData = doc.data();
        newCharacters.push({
          id: doc.id,
          currentTierIndex: charData.currentTierIndex || 0,
          ...charData,
        });
        if (charData.userId) {
            uniqueUserIds.add(charData.userId);
        }
      });
      
      const profilePromises = Array.from(uniqueUserIds).map(userId => fetchUserProfileData(userId));
      await Promise.all(profilePromises);

      const finalCharacters = newCharacters.map(char => ({
          ...char,
          userName: userProfileCache.value[char.userId]?.userName || 'Unknown Player',
          userLocation: userProfileCache.value[char.userId]?.userLocation || null,
      }));

      characters.value = finalCharacters;
      
    } catch (e) {
      console.error("Error processing leaderboard snapshot or profiles:", e);
      error.value = "Failed to process data from the server.";
    } finally {
      loading.value = false;
    }
  }, (err) => {
    console.error("Error fetching leaderboard:", err);
    error.value = `Access Denied or Connection Error: ${err.message}`;
    loading.value = false;
  });
};

const toggleSortDirection = () => {
  sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc';
};

// --- Filtering and Ranking Logic ---

// 1. Get the full list, filtered and sorted, with an 'actualRank' attached
const allRankedCharacters = computed(() => {
  // Filter
  let filtered = characters.value.filter(char => {
    if (filterFaction.value && char.faction !== filterFaction.value) return false;
    if (filterSpecialty.value && char.specialty !== filterSpecialty.value) return false;
    if (filterLocation.value && (char.location || '') !== filterLocation.value) return false;
    return true; 
  });

  // Sort (unchanged)
  filtered.sort((a, b) => {
    const aValue = a[sortBy.value];
    const bValue = b[sortBy.value];

    if (sortBy.value === 'prestige' || sortBy.value === 'currentTierIndex') {
      const comparison = (aValue || 0) - (bValue || 0);
      return sortDirection.value === 'asc' ? comparison : -comparison;
    } 
    const comparison = (aValue || '').localeCompare(bValue || '');
    return sortDirection.value === 'asc' ? comparison : -comparison;
  });

  // Map to include static rank based on current sort order
  return filtered.map((char, index) => ({
    ...char,
    actualRank: index + 1
  }));
});

// --- Pagination Logic ---

// Calculate the total number of pages
const totalPages = computed(() => {
    return Math.max(1, Math.ceil(allRankedCharacters.value.length / itemsPerPage));
});

// Slice the full ranked list to get the current page's characters
const paginatedCharacters = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allRankedCharacters.value.slice(start, end);
});

// Navigation functions
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// --- Faction Comparison Computed Properties (omitted for brevity) ---

// --- Chart Options (omitted for brevity) ---

// --- Lifecycle & Watchers ---
onMounted(() => {
  const unregisterAuthObserver = auth.onAuthStateChanged(user => {
    unregisterAuthObserver(); 
    if (user) {
        fetchLeaderboard();
    } else {
        loading.value = false;
        error.value = "You must be logged in to view the Classification.";
    }
  });
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
    console.log('ClassificationView: Firestore listener unsubscribed.');
  }
});

// Reset page to 1 whenever filters or sort order changes
watch([filterFaction, filterSpecialty, filterLocation, sortBy, sortDirection], () => {
    currentPage.value = 1;
});

// Add logic to check if current page is now out of bounds (e.g., if filtering dramatically reduces the list)
watch(totalPages, (newTotalPages) => {
    if (currentPage.value > newTotalPages) {
        currentPage.value = newTotalPages || 1; 
    }
});
</script>

<style scoped>
/* No extra styles needed - Tailwind handles it */
</style>
<template>
  <section :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder, 'p-6 rounded-lg shadow-xl border overflow-auto h-full']">
    
    <h2 class="text-3xl font-serif mb-6 border-b pb-3" 
        :class="[themeClasses.primaryText, themeClasses.accentBorder]">
        Classification: Global Scholars
    </h2>
    
    <p class="text-sm mt-4 mb-4" :class="themeClasses.primaryText">
      View the global rankings of all scholars. Use the controls below to filter and sort the data.
    </p>

    <div v-if="!loading && !error" class="mb-8 p-4 rounded-lg border" :class="themeClasses.accentBorder">
        <h3 class="text-xl font-bold mb-4">Composite Faction Dominance (Percentage)</h3>
        
        <div class="bg-gray-800 p-6 rounded-lg shadow-inner">
            <h4 class="text-lg font-semibold mb-4">Total Weighted Dominance (Prestige 3x, Tier Sum 2x, Count 1x)</h4>
            
            <bar-chart :data="weightedDominanceChartData" :options="{
                scales: {
                    x: { 
                        beginAtZero: true, 
                        max: 100, 
                        stacked: true, 
                        title: { display: true, text: 'Percentage Dominance (%)' } 
                    },
                    y: { stacked: true }
                },
                responsive: true,
                maintainAspectRatio: false, 
                height: '100px',
                indexAxis: 'y',
                plugins: { 
                    tooltip: { 
                        callbacks: { 
                            label: (context) => context.dataset.label + ': ' + context.parsed.x.toFixed(2) + '%'
                        } 
                    },
                    legend: { position: 'bottom' } 
                }
            }"></bar-chart>
        </div>
        
        <p class="text-xs mt-4 text-gray-400">
            *Dominance is calculated based on a composite score: (Prestige x3) + (Tier Sum x2) + (Scholar Count x1). Data reflects the current filters applied.
        </p>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 p-4 rounded-lg border" :class="themeClasses.accentBorder">
      
      <div class="flex items-center space-x-2">
        <label for="filter-faction" class="font-bold text-sm">Faction:</label>
        <select id="filter-faction" 
                v-model="filterFaction"
                class="p-2 rounded-md shadow-inner text-sm"
                :class="['bg-gray-800', themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="">All Factions</option>
          <option value="Lumen">Lumen</option>
          <option value="Umbra">Umbra</option>
        </select>
      </div>

      <div class="flex items-center space-x-2">
        <label for="filter-specialty" class="font-bold text-sm">Specialty:</label>
        <select id="filter-specialty" 
                v-model="filterSpecialty"
                class="p-2 rounded-md shadow-inner text-sm"
                :class="['bg-gray-800', themeClasses.primaryText, themeClasses.accentBorder]">
          <option value="">All Specialties</option>
          <option value="Arcane">Arcane</option>
          <option value="Alchemist">Alchemist</option>
        </select>
      </div>

      <div class="flex items-center space-x-2">
        <label for="filter-location" class="font-bold text-sm">Location:</label>
        <select id="filter-location" 
                v-model="filterLocation"
                class="p-2 rounded-md shadow-inner text-sm"
                :class="['bg-gray-800', themeClasses.primaryText, themeClasses.accentBorder]">
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
        <select id="sort-by" 
                v-model="sortBy"
                class="p-2 rounded-md shadow-inner text-sm"
                :class="['bg-gray-800', themeClasses.primaryText, themeClasses.accentBorder]">
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
              :class="[sortDirection === 'desc' ? 'bg-red-700 hover:bg-red-600' : 'bg-green-700 hover:bg-green-600', 'text-white']">
        Sort: {{ sortDirection === 'desc' ? 'High to Low (⬇️)' : 'Low to High (⬆️)' }}
      </button>

    </div>

    <div v-if="loading" class="text-lg text-yellow-400 p-4 text-center">Loading global rankings...</div>
    <div v-else-if="error" class="text-lg text-red-500 bg-red-900/50 p-4 rounded-lg text-center">Error fetching rankings: {{ error }}</div>
    <div v-else-if="filteredAndSortedCharacters.length === 0" class="text-lg text-yellow-500 p-4 text-center bg-gray-900/50 rounded-lg">
        No scholars found matching the current filters.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-700 rounded-lg">
        <thead :class="['bg-violet-900/70', themeClasses.primaryText]">
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
        <tbody class="divide-y divide-gray-800">
          <tr v-for="(char, index) in filteredAndSortedCharacters" :key="char.id" class="transition duration-150 ease-in-out hover:bg-gray-800">
            <td class="px-4 py-4 whitespace-nowrap text-sm font-medium">{{ index + 1 }}</td>
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
  </section>
</template>

<script setup>
import { defineProps, ref, computed, onMounted, onUnmounted } from 'vue';
import { getAuth } from "firebase/auth";
import { getFirestore, collectionGroup, onSnapshot, query, doc, getDoc } from "firebase/firestore";

// --- Props ---
const props = defineProps({
  themeClasses: { 
    type: Object, 
    required: true,
    default: () => ({ 
      primaryBg: 'bg-gray-950',
      primaryText: 'text-yellow-300', 
      accentBorder: 'border-yellow-600',
      sidebarBg: 'bg-violet-950',
      activeMenuBg: 'bg-green-800'
    })
  }
});

// --- Constants ---
const DOMINANCE_WEIGHTS = {
    prestige: 3,
    tierSum: 2,
    count: 1,
};

// --- Firebase Setup ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const db = getFirestore();
const auth = getAuth();

let unsubscribe;

// --- State ---
const characters = ref([]); 
const userProfileCache = ref({}); // NEW: Cache to store fetched user profile data
const loading = ref(true);
const error = ref(null);

// Filter States
const filterFaction = ref('');
const filterSpecialty = ref('');
const filterLocation = ref('');

// Sort States
const sortBy = ref('prestige');
const sortDirection = ref('desc'); 


// --- NEW: User Profile Fetching Function ---

/**
 * Fetches and caches the user's profile data (like username) from Firestore.
 * @param {string} userId - The ID of the user.
 */
const fetchUserProfileData = async (userId) => {
    if (userProfileCache.value[userId]) {
        return userProfileCache.value[userId];
    }
    
    try {
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            // Assuming 'username' or 'name' is stored in user_data
            const profile = {
                userName: data.username || data.name || 'Anonymous Scholar',
                // Assuming the global player location is also in user_data
                userLocation: data.location || null 
            };
            userProfileCache.value[userId] = profile;
            return profile;
        }
    } catch (e) {
        console.warn(`Could not fetch profile for user ${userId}:`, e.message);
    }
    // Return a default profile if fetching fails or data doesn't exist
    userProfileCache.value[userId] = { userName: 'Missing Profile', userLocation: null };
    return userProfileCache.value[userId];
};


// --- Firestore Data Fetching ---
const fetchLeaderboard = () => {
  if (!auth.currentUser) {
    error.value = "You must be logged in to view the Classification.";
    loading.value = false;
    return;
  }
  
  // Use collectionGroup to query ALL 'leaderboard' subcollections
  const leaderboardCollectionRef = collectionGroup(db, 'leaderboard');
  const q = query(leaderboardCollectionRef);

  loading.value = true;
  error.value = null;

  unsubscribe = onSnapshot(q, async (snapshot) => { // Changed to async to handle promises
    try {
      const newCharacters = [];
      const uniqueUserIds = new Set();
      
      // Phase 1: Collect character data and unique user IDs
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
      
      // Phase 2: Fetch all required user profiles concurrently
      const profilePromises = Array.from(uniqueUserIds).map(userId => fetchUserProfileData(userId));
      await Promise.all(profilePromises);

      // Phase 3: Merge profile data into character objects
      const finalCharacters = newCharacters.map(char => ({
          ...char,
          // Merge cached profile data (userName and userLocation)
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

// --- Sorting Logic (Unchanged) ---
const toggleSortDirection = () => {
  sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc';
};


// --- Filtering and Sorting Logic ---
const filteredAndSortedCharacters = computed(() => {
  // 1. FILTERING (Filtering remains based on character data)
  let filtered = characters.value.filter(char => {
    if (filterFaction.value && char.faction !== filterFaction.value) { return false; }
    if (filterSpecialty.value && char.specialty !== filterSpecialty.value) { return false; }
    
    // Check filterLocation against the character's location
    const charLocation = char.location || '';
    const filterLoc = filterLocation.value;
    if (filterLoc && charLocation !== filterLoc) { return false; }

    return true; 
  });

  // 2. SORTING (The logic is simplified since 'userName' is now available)
  const sorted = [...filtered];
  sorted.sort((a, b) => {
    const aValue = a[sortBy.value];
    const bValue = b[sortBy.value];

    // Handle numeric comparison (Prestige, currentTierIndex)
    if (sortBy.value === 'prestige' || sortBy.value === 'currentTierIndex') {
      const comparison = (aValue || 0) - (bValue || 0);
      return sortDirection.value === 'asc' ? comparison : -comparison;
    } 
    
    // Handle string comparison (Name, Faction, Specialty, Location, Player/User)
    const comparison = (aValue || '').localeCompare(bValue || '');
    return sortDirection.value === 'asc' ? comparison : -comparison;
  });

  return sorted;
});


// --- Faction Comparison Computed Properties (Unchanged) ---
// 1. Sum up all metrics by faction
const factionComparisonData = computed(() => {
    const data = {
        Lumen: { count: 0, tierSum: 0, prestigeSum: 0 },
        Umbra: { count: 0, tierSum: 0, prestigeSum: 0 },
        Other: { count: 0, tierSum: 0, prestigeSum: 0 },
    };

    filteredAndSortedCharacters.value.forEach(char => {
        const tier = (char.currentTierIndex || 0) + 1; 
        const prestige = char.prestige || 0;

        const factionKey = (char.faction === 'Lumen' || char.faction === 'Umbra') ? char.faction : 'Other';
        
        data[factionKey].count++;
        data[factionKey].tierSum += tier;
        data[factionKey].prestigeSum += prestige;
    });

    return data;
});

// 2. Calculate the single weighted dominance percentage for the stacked bar
const weightedDominanceChartData = computed(() => {
    const comparison = factionComparisonData.value;
    const weights = DOMINANCE_WEIGHTS;

    const calculateWeightedScore = (factionData) => {
        return (factionData.prestigeSum * weights.prestige) + 
               (factionData.tierSum * weights.tierSum) + 
               (factionData.count * weights.count);
    };

    const lumenScore = calculateWeightedScore(comparison.Lumen);
    const umbraScore = calculateWeightedScore(comparison.Umbra);
    const otherScore = calculateWeightedScore(comparison.Other);

    const grandTotalScore = lumenScore + umbraScore + otherScore;

    if (grandTotalScore === 0) { return []; }
    
    // Calculate Dominance Percentage
    const lumenPct = (lumenScore / grandTotalScore) * 100;
    const umbraPct = (umbraScore / grandTotalScore) * 100;
    const otherPct = (otherScore / grandTotalScore) * 100;

    // Format for Chartkick single stacked bar
    const chartData = [
        {
            name: 'Lumen', 
            data: [['Total Weighted Dominance', Math.round(lumenPct * 100) / 100]],
            backgroundColor: '#FFD700',
        },
        {
            name: 'Umbra',
            data: [['Total Weighted Dominance', Math.round(umbraPct * 100) / 100]],
            backgroundColor: '#8A2BE2',
        },
    ];

    if (otherPct > 0.01) {
        chartData.push({
            name: 'Other/Unassigned',
            data: [['Total Weighted Dominance', Math.round(otherPct * 100) / 100]],
            backgroundColor: '#4A5568',
        });
    }

    return chartData;
});


// --- Lifecycle ---

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
</script>

<style scoped>
/* Table styles adjusted to be dark theme friendly */
.divide-gray-700 {
  border-color: #374151; /* dark gray */
}

.divide-gray-800 {
  border-color: #1f2937; /* very dark gray */
}
</style>
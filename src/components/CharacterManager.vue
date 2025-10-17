<template>
  <div class="flex flex-col items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 p-4 sm:p-6 md:p-8 overflow-y-auto">
    <h2 class="text-4xl font-serif text-yellow-100 mb-8 text-center leading-tight">Forge Your Legacy</h2>

    <div v-if="loading" class="mt-4 text-yellow-400">Loading...</div>
    <div v-if="error" class="mt-4 text-red-500 bg-red-100 p-3 rounded-md">{{ error }}</div>

    <div v-if="!loreLoaded" class="w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700 text-center">
      <p class="text-lg text-yellow-300">Loading lore...</p>
    </div>

    <div v-else-if="currentStep === 'chapter1' || currentStep === 'factionSelect'" class="w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Chapter 1: The First Whisper</h3>
      <div v-html="lore.chapter1" class="text-lg text-yellow-100/90 leading-relaxed mb-6 max-h-80 overflow-y-auto markdown-content"></div>
      
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

    <div v-else-if="currentStep === 'chapter2' || currentStep === 'specialtySelect'" class="w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Chapter 2: The Second Whisper</h3>
      <div v-html="lore.chapter2" class="text-lg text-yellow-100/90 leading-relaxed mb-6 max-h-80 overflow-y-auto markdown-content"></div>
      
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

    <div v-else-if="currentStep === 'nameAssign'" class="w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2">Assign Your Scholar Name</h3>
      <p class="text-lg text-yellow-300 mb-4">
        Name your scholar, choose wisely as this name will define your legacy.
      </p>
      <p class="text-sm text-yellow-400 mb-4 italic">
        Faction: {{ newCharacter.faction }} | Specialty: {{ newCharacter.specialty }}
      </p>

      <p class="text-sm text-yellow-400 mb-4 italic">
        Current Location: 
        <span v-if="location.loading" class="text-yellow-500">Detecting location...</span>
        <span v-else-if="location.name">{{ location.name }}</span>
        <span v-else class="text-red-400">Location Unknown (This will be 'Unknown' on the global leaderboards)</span>
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
          :disabled="!newCharacter.name || loading"
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
// Import necessary Firestore updates for the character count limit
import { getFirestore, collection, addDoc, doc, updateDoc, increment, setDoc } from 'firebase/firestore';

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

// Character data (ADDED location)
const newCharacter = ref({
  name: '',
  faction: '',
  specialty: '',
  knowledge: 0,
  resources: {},
  research: {},
  prestige: 0,
  skillPoints: 0,
  location: 'Unknown', // Default value
});

// NEW: Location State
const location = ref({
  name: '',
  loading: false,
  fetched: false,
});

// --- NEW: Fetch Location Function ---
const fetchUserLocation = async (userId) => {
    if (location.value.fetched) return; 

    // 1. Check if location is already saved in the user profile
    try {
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists() && docSnap.data().location) {
            location.value.name = docSnap.data().location;
            location.value.fetched = true;
            newCharacter.value.location = location.value.name;
            console.log('Location loaded from profile:', location.value.name);
            return;
        }
    } catch (e) {
        console.error("Error reading user profile location:", e);
    }

    // 2. If not saved, fetch from public API
    location.value.loading = true;
    try {
        const response = await fetch('https://api.ip-api.com/json/?fields=city,regionName,country');
        if (!response.ok) throw new Error('Failed to fetch location data');
        
        const data = await response.json();
        let locationName = 'Unknown';

        // Prioritize: City, then Region, then Country
        if (data.city && data.city !== '') {
            locationName = data.city;
        } else if (data.regionName && data.regionName !== '') {
            locationName = data.regionName;
        } else if (data.country && data.country !== '') {
            locationName = data.country;
        }

        location.value.name = locationName;
        newCharacter.value.location = locationName; // Set the default location for the new character
        location.value.fetched = true;
        
        // Save the fetched location to the user profile for future use (if successful)
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        await setDoc(userDocRef, { location: locationName }, { merge: true });

    } catch (e) {
        console.error("Location API error:", e);
        location.value.name = 'Unknown';
        newCharacter.value.location = 'Unknown';
    } finally {
        location.value.loading = false;
    }
};
// --- END NEW: Fetch Location Function ---


// --- UPDATED MARKDOWN PARSER FUNCTION (Now includes table parsing!) ---
/**
 * Simple client-side Markdown parser for basic formatting.
 * Handles paragraphs, bold, italics, headings (#, ##, ###), horizontal rules (---), lists (* or -), and basic tables.
 */
const parseMarkdown = (markdown) => {
    if (!markdown) return '';
    
    // 1. Sanitize input to prevent script injection (basic approach)
    let html = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const lines = html.split('\n');
    let output = '';
    let inList = false;
    let tableLines = [];

    // Helper function to process and clear a buffered table
    const finalizeTable = () => {
        if (tableLines.length === 0) return;

        // Start table structure with Tailwind classes for responsive/scrollable tables
        let tableHtml = '<div class="overflow-x-auto my-4"><table class="min-w-full divide-y divide-yellow-700 border border-yellow-700 rounded-lg">';
        
        // The first line is the header row
        const headerLine = tableLines[0];
        // Remove leading/trailing pipes and split by pipe
        const headers = headerLine.replace(/^\||\|$/g, '').split('|').map(h => h.trim());

        // Process Header (if headers exist)
        if (headers.length > 0) {
            tableHtml += '<thead class="bg-violet-800/80">';
            tableHtml += '<tr>';
            headers.forEach(header => {
                // Apply internal formatting to header content
                let content = header;
                content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                
                // Use th for headers
                tableHtml += `<th scope="col" class="px-3 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">${content}</th>`;
            });
            tableHtml += '</tr>';
            tableHtml += '</thead>';
        }

        // Process Body (Starting from line 2, skipping the header separator line)
        if (tableLines.length > 1) {
            tableHtml += '<tbody class="divide-y divide-yellow-800">';
            for (let i = 2; i < tableLines.length; i++) {
                const rowLine = tableLines[i];
                const cells = rowLine.replace(/^\||\|$/g, '').split('|').map(c => c.trim());

                if (cells.length === headers.length) {
                    tableHtml += '<tr class="bg-violet-900/50 hover:bg-violet-800/70">';
                    cells.forEach(cell => {
                        // Apply internal formatting to cell content
                        let content = cell;
                        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                        content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                        
                        // Use td for body cells
                        tableHtml += `<td class="px-3 py-2 whitespace-nowrap text-sm text-yellow-100">${content}</td>`;
                    });
                    tableHtml += '</tr>';
                }
            }
            tableHtml += '</tbody>';
        }

        tableHtml += '</table></div>';
        output += tableHtml;
        tableLines = []; // Reset the buffer
    };

    lines.forEach(line => {
        let trimmedLine = line.trim();
        
        // ------------------ TABLE CHECK ------------------
        // Check if the line is part of a table (must contain | and is not a heading)
        const isTableLine = trimmedLine.includes('|') && !trimmedLine.startsWith('#');
        
        if (isTableLine) {
            // Check for the header/separator structure (looks like |---|)
            const isSeparator = trimmedLine.match(/\|[:-]*\|/); 
            
            // If the table buffer is empty, and we hit a separator, skip it for now.
            // If the line is a pipe-separated line, treat it as a table line.
            if (tableLines.length === 0 && isSeparator) {
                 // Skip leading separator line if no header was found yet. 
                 // However, the MD files have the header first, then separator, then body. 
                 // We always buffer lines that look like table structure.
                 tableLines.push(trimmedLine);
                 
            } else if (tableLines.length > 0 || trimmedLine.startsWith('|')) {
                // End list if a table starts right after a list item
                if (inList) {
                    output += '</ul>';
                    inList = false;
                }
                // Buffer the table line and move to next iteration
                tableLines.push(trimmedLine);
                return;
            }
        } 
        
        // If we were processing a table but the current line is not a table line, finalize the table
        if (tableLines.length > 0) {
            finalizeTable();
        }
        
        // ------------------ NON-TABLE PROCESSING ------------------

        if (trimmedLine.length === 0) {
            // End list if currently in one and line is empty
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            return;
        }

        // Check for Headings
        if (trimmedLine.startsWith('###')) {
            output += `<h3 class="text-xl font-bold text-yellow-200 mt-4 mb-2">${trimmedLine.substring(3).trim()}</h3>`;
            return;
        }
        if (trimmedLine.startsWith('##')) {
            output += `<h2 class="text-2xl font-serif text-yellow-100 mt-6 mb-3 border-b border-yellow-700 pb-1">${trimmedLine.substring(2).trim()}</h2>`;
            return;
        }
        if (trimmedLine.startsWith('#')) {
            // This is primarily for the file's internal structure, H1 might be too big
            output += `<h1 class="text-3xl font-serif text-yellow-50 mt-8 mb-4">${trimmedLine.substring(1).trim()}</h1>`;
            return;
        }
        
        // Check for Horizontal Rule (---)
        if (trimmedLine === '---') {
            // End list if rule appears inside
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            output += '<hr class="my-6 border-yellow-800">';
            return;
        }

        // Check for List Items (* or -)
        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            if (!inList) {
                output += '<ul class="list-disc ml-6 space-y-1 mb-4">';
                inList = true;
            }
            
            // Remove list marker and process inner formatting
            let listItemContent = trimmedLine.substring(2).trim();
            // Apply internal formatting
            listItemContent = listItemContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            listItemContent = listItemContent.replace(/\*(.*?)\*/g, '<em>$1</em>');
            listItemContent = listItemContent.replace(/_(.*?)_/g, '<em>$1</em>');

            output += `<li>${listItemContent}</li>`;
            return;
        }
        
        // End list if currently in one and the line is not a list item
        if (inList) {
            output += '</ul>';
            inList = false;
        }


        // Handle Paragraphs (Apply internal formatting only)
        let segment = trimmedLine;
        
        // Handle bold (**text**)
        segment = segment.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Handle italics (*text* or _text_)
        segment = segment.replace(/\*(.*?)\*/g, '<em>$1</em>');
        segment = segment.replace(/_(.*?)_/g, '<em>$1</em>');
        
        // Wrap the segment in a paragraph tag with a styling class
        output += `<p class="mb-4">${segment}</p>`;
    });

    // Final check for unclosed list/table at end of file
    if (inList) {
        output += '</ul>';
    }
    if (tableLines.length > 0) {
        finalizeTable();
    }


    return output;
};


// Fetch and parse the lore from the public directory
const fetchLore = async () => {
  try {
    // Fetching .md files
    const response1 = await fetch('/the-arcane-scholar-s-legacy/Chapter1.md');
    if (!response1.ok) {
      throw new Error('Failed to fetch Chapter1.md.');
    }
    const text1 = await response1.text();
    lore.value.chapter1 = parseMarkdown(text1); // Parse the text
    console.log('Successfully read and parsed Chapter1.md.');

    const response2 = await fetch('/the-arcane-scholar-s-legacy/Chapter2.md');
    if (!response2.ok) {
      throw new Error('Failed to fetch Chapter2.md.');
    }
    const text2 = await response2.text();
    lore.value.chapter2 = parseMarkdown(text2); // Parse the text
    console.log('Successfully read and parsed Chapter2.md.');

    loreLoaded.value = true;
  } catch (err) {
    console.error('Error fetching lore:', err);
    error.value = `Failed to load game lore (${err.message}). Ensure Chapter1.md and Chapter2.md exist.`;
  }
};

onMounted(() => {
  fetchLore();
  
  // Call location fetch on mount
  if (auth.currentUser) {
    fetchUserLocation(auth.currentUser.uid);
  }
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

// Character Creation Logic (UPDATED for location)
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
    // 1. Create the character document
    const characterCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/characters`);
    
    // Ensure the final location is in the character object before saving
    newCharacter.value.location = location.value.name || 'Unknown';
    
    const docRef = await addDoc(characterCollectionRef, newCharacter.value);
    
    // 2. IMPORTANT: Increment the character count in the user's profile document
    // This allows the user to create the next character up to the limit of 4
    const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
    await updateDoc(userDocRef, {
        characterCount: increment(1)
    }, { merge: true });

    // 3. Create the public leaderboard entry immediately after character creation
    const leaderboardDocRef = doc(db, `artifacts/${appId}/public/data/leaderboard`, docRef.id);
    const publicLeaderboardData = {
        name: newCharacter.value.name,
        prestige: newCharacter.value.prestige,
        faction: newCharacter.value.faction,
        specialty: newCharacter.value.specialty,
        location: newCharacter.value.location,
        userId: userId, // Required by Firebase rule
    };
    await setDoc(leaderboardDocRef, publicLeaderboardData, { merge: true });


    console.log("New character created with ID:", docRef.id);
    emit('character-created', docRef.id);
  } catch (err) {
    console.error("Error creating character:", err);
    // Check if the error is due to the character limit (security rule block)
    if (err.message.includes('permission denied') || err.message.includes('unauthorized')) {
        error.value = "Creation failed: You have reached the maximum limit of 4 characters. Please delete one to continue.";
    } else {
        error.value = `Failed to create character: ${err.message}`;
    }
  } finally {
    loading.value = false;
  }
};
</script>
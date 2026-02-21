Based on the Game Design Document (GDD2.md) and the provided code, here are the instructions to fix script duplication, optimize components, and create the new Skill Tree view.

1. Create Shared Utility File

Create a new file src/utils/gameUtils.js to centralize the duplicated utility functions. This reduces code duplication and makes maintenance easier.


// src/utils/gameUtils.js

/**
 * Utility to format large numbers (K, M, B, T)
 */
export const formatLargeNumber = (num) => {
  if (num === null || num === undefined) return '0.00';
  num = Number(num);

  const units = [
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
  ];

  for (let i = 0; i < units.length; i++) {
    const { value, symbol } = units[i];
    if (Math.abs(num) >= value) {
      const scaled = num / value;
      let formatted;
      if (scaled < 10) {
        formatted = scaled.toFixed(3);
      } else if (scaled < 100) {
        formatted = scaled.toFixed(2);
      } else {
        formatted = scaled.toFixed(1);
      }
      return formatted + symbol;
    }
  }
  return num.toFixed(2);
};

/**
 * Simple client-side Markdown parser for basic formatting.
 * Handles paragraphs, bold, italics, headings, lists, and tables.
 */
export const parseMarkdown = (markdown) => {
    if (!markdown) return '';

    let html = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const lines = html.split('\n');
    let output = '';
    let inList = false;
    let tableLines = [];

    const finalizeTable = () => {
        if (tableLines.length === 0) return;

        let tableHtml = '<div class="overflow-x-auto my-4"><table class="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg">';

        const headerLine = tableLines[0];
        const headers = headerLine.replace(/^\||\|$/g, '').split('|').map(h => h.trim());

        if (headers.length > 0) {
            tableHtml += '<thead class="bg-gray-200">';
            tableHtml += '<tr>';
            headers.forEach(header => {
                let content = header;
                content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                tableHtml += `<th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">${content}</th>`;
            });
            tableHtml += '</tr>';
            tableHtml += '</thead>';
        }

        if (tableLines.length > 1) {
            tableHtml += '<tbody class="divide-y divide-gray-200">';
            for (let i = 2; i < tableLines.length; i++) {
                const rowLine = tableLines[i];
                const cells = rowLine.replace(/^\||\|$/g, '').split('|').map(c => c.trim());

                if (cells.length === headers.length) {
                    tableHtml += '<tr class="bg-white hover:bg-gray-50">';
                    cells.forEach(cell => {
                        let content = cell;
                        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                        content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                        tableHtml += `<td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">${content}</td>`;
                    });
                    tableHtml += '</tr>';
                }
            }
            tableHtml += '</tbody>';
        }

        tableHtml += '</table></div>';
        output += tableHtml;
        tableLines = [];
    };

    lines.forEach(line => {
        let trimmedLine = line.trim();

        const isTableLine = trimmedLine.includes('|') && !trimmedLine.startsWith('#');

        if (isTableLine) {
            const isSeparator = trimmedLine.match(/\|[:-]*\|/);

            if (tableLines.length === 0 && isSeparator) {
                 tableLines.push(trimmedLine);
            } else if (tableLines.length > 0 || trimmedLine.startsWith('|')) {
                if (inList) {
                    output += '</ul>';
                    inList = false;
                }
                tableLines.push(trimmedLine);
                return;
            }
        }

        if (tableLines.length > 0) {
            finalizeTable();
        }

        if (trimmedLine.length === 0) {
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            return;
        }

        if (trimmedLine.startsWith('###')) {
            output += `<h3 class="text-xl font-bold text-gray-800 mt-4 mb-2">${trimmedLine.substring(3).trim()}</h3>`;
            return;
        }
        if (trimmedLine.startsWith('##')) {
            output += `<h2 class="text-2xl font-serif text-black mt-6 mb-3 border-b border-gray-300 pb-1">${trimmedLine.substring(2).trim()}</h2>`;
            return;
        }
        if (trimmedLine.startsWith('#')) {
            output += `<h1 class="text-3xl font-serif text-black mt-8 mb-4">${trimmedLine.substring(1).trim()}</h1>`;
            return;
        }

        if (trimmedLine === '---') {
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            output += '<hr class="my-6 border-gray-300">';
            return;
        }

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            if (!inList) {
                output += '<ul class="list-disc ml-6 space-y-1 mb-4">';
                inList = true;
            }

            let listItemContent = trimmedLine.substring(2).trim();
            listItemContent = listItemContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            listItemContent = listItemContent.replace(/\*(.*?)\*/g, '<em>$1</em>');
            listItemContent = listItemContent.replace(/_(.*?)_/g, '<em>$1</em>');

            output += `<li>${listItemContent}</li>`;
            return;
        }

        if (inList) {
            output += '</ul>';
            inList = false;
        }

        let segment = trimmedLine;
        segment = segment.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        segment = segment.replace(/\*(.*?)\*/g, '<em>$1</em>');
        segment = segment.replace(/_(.*?)_/g, '<em>$1</em>');

        output += `<p class="mb-4">${segment}</p>`;
    });

    if (inList) {
        output += '</ul>';
    }
    if (tableLines.length > 0) {
        finalizeTable();
    }

    return output;
};

/**
 * Fetches user profile data (username, location) from Firestore.
 */
export const fetchUserProfileData = async (userId, db, appId) => {
    if (!userId) return { userName: 'Unknown', userLocation: null };

    try {
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                userName: data.username || data.name || 'Anonymous Scholar',
                userLocation: data.location || null
            };
        }
    } catch (e) {
        console.warn(`Could not fetch profile for user ${userId}:`, e.message);
    }
    return { userName: 'Missing Profile', userLocation: null };
};


2. Update src/components/MainGameComponent.vue

Changes:

 1 Import formatLargeNumber from @/utils/gameUtils.
 2 Remove the formatLargeNumber function definition from the script.


// Add to imports
import { formatLargeNumber } from '@/utils/gameUtils';

// ... inside script setup ...

// Remove this function:
// const formatLargeNumber = (num) => { ... }

// ... rest of the code ...


3. Update src/components/SanctumView.vue

Changes:

 1 Import formatLargeNumber from @/utils/gameUtils.
 2 Remove the formatLargeNumber function definition from the script.


// Add to imports
import { formatLargeNumber } from '@/utils/gameUtils';

// ... inside script setup ...

// Remove this function:
// const formatLargeNumber = (num) => { ... }

// ... rest of the code ...


4. Update src/components/CharacterManager.vue

Changes:

 1 Import parseMarkdown from @/utils/gameUtils.
 2 Remove the parseMarkdown function definition from the script.


// Add to imports
import { parseMarkdown } from '@/utils/gameUtils';

// ... inside script setup ...

// Remove this function:
// const parseMarkdown = (markdown) => { ... }

// ... rest of the code ...


5. Update src/components/ClassificationView.vue

Changes:

 1 Import fetchUserProfileData from @/utils/gameUtils.
 2 Remove the fetchUserProfileData function definition from the script.


// Add to imports
import { fetchUserProfileData } from '@/utils/gameUtils';

// ... inside script setup ...

// Remove this function:
// const fetchUserProfileData = async (userId) => { ... }

// ... rest of the code ...


6. Create src/components/SkillTreeView.vue

Changes:

 1 Create this new file.
 2 It implements the Skill Tree logic based on the GDD (Factions, Specialties, Subspecialties).
 3 It accepts skillPoints and characterDetails as props and emits an event to update them.


<template>
  <section :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder, 'p-6 rounded-lg shadow-xl border']">

    <h2 class="text-3xl font-serif mb-6 border-b pb-3"
        :class="[themeClasses.primaryText, themeClasses.accentBorder]">
        Skill Tree
    </h2>

    <div class="flex items-center justify-between mb-6">
      <p class="text-lg" :class="themeClasses.primaryText">
        Available Skill Points: <span class="font-bold text-xl" :class="skillPoints > 0 ? themeClasses.activeMenuBg : 'text-gray-500'">{{ skillPoints }}</span>
      </p>
      <button
        @click="resetSkills"
        :disabled="skillPoints === 0"
        class="text-sm px-3 py-1 rounded border"
        :class="skillPoints === 0 ? 'opacity-50 cursor-not-allowed' : themeClasses.buttonSecondaryBg"
      >
        Reset Skills
      </button>
    </div>

    <!-- Faction Selection -->
    <div v-if="!characterDetails.faction" class="mb-8">
      <h3 class="text-xl font-bold mb-4" :class="themeClasses.primaryText">1. Choose Your Faction</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          v-for="faction in factions"
          :key="faction.id"
          @click="selectFaction(faction.id)"
          :class="[
            'p-4 rounded-lg border text-left transition-all',
            selectedFaction === faction.id
              ? [themeClasses.activeMenuBg, themeClasses.activeMenuText, 'ring-2 ring-inset']
              : [themeClasses.sidebarBg, themeClasses.accentBorder, 'hover:opacity-80']
          ]"
        >
          <h4 class="font-bold text-lg">{{ faction.name }}</h4>
          <p class="text-sm opacity-80">{{ faction.desc }}</p>
        </button>
      </div>
    </div>

    <!-- Specialty Selection -->
    <div v-else-if="!characterDetails.specialty" class="mb-8">
      <h3 class="text-xl font-bold mb-4" :class="themeClasses.primaryText">2. Choose Your Specialty</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          v-for="specialty in specialties"
          :key="specialty.id"
          @click="selectSpecialty(specialty.id)"
          :class="[
            'p-4 rounded-lg border text-left transition-all',
            selectedSpecialty === specialty.id
              ? [themeClasses.activeMenuBg, themeClasses.activeMenuText, 'ring-2 ring-inset']
              : [themeClasses.sidebarBg, themeClasses.accentBorder, 'hover:opacity-80']
          ]"
        >
          <h4 class="font-bold text-lg">{{ specialty.name }}</h4>
          <p class="text-sm opacity-80">{{ specialty.desc }}</p>
        </button>
      </div>
    </div>

    <!-- Subspecialty / Skill Nodes -->
    <div v-else>
      <h3 class="text-xl font-bold mb-4" :class="themeClasses.primaryText">3. Invest in Subspecialties</h3>
      <p class="text-sm mb-6" :class="themeClasses.primaryText">Select nodes to unlock passive bonuses.</p>

      <div class="space-y-4">
        <div
          v-for="node in availableNodes"
          :key="node.id"
          class="p-4 rounded-lg border shadow-sm flex items-center justify-between"
          :class="[
            node.unlocked
              ? [themeClasses.primaryBg, themeClasses.activeMenuBg, 'opacity-100']
              : [themeClasses.sidebarBg, themeClasses.accentBorder, 'opacity-60']
          ]"
        >
          <div>
            <h4 class="font-bold" :class="themeClasses.primaryText">{{ node.name }}</h4>
            <p class="text-sm" :class="themeClasses.primaryText">{{ node.desc }}</p>
          </div>
          <button
            @click="spendSkillPoint(node)"
            :disabled="!node.unlocked || skillPoints <= 0"
            class="px-4 py-2 rounded font-bold text-sm transition-all"
            :class="node.unlocked && skillPoints > 0
              ? [themeClasses.buttonBg, themeClasses.buttonText, 'hover:' + themeClasses.buttonHover]
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
          >
            {{ node.level > 0 ? `Level ${node.level}` : 'Unlock' }}
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  skillPoints: { type: Number, required: true },
  characterDetails: { type: Object, required: true },
  themeClasses: {
    type: Object,
    required: true,
    default: () => ({
      primaryBg: 'bg-white',
      primaryText: 'text-black',
      accentBorder: 'border-gray-400',
      sidebarBg: 'bg-gray-100',
      activeMenuBg: 'bg-gray-300',
      activeMenuText: 'text-black',
      buttonBg: 'bg-blue-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-blue-700',
      buttonSecondaryBg: 'bg-gray-500',
    })
  }
});

const emit = defineEmits(['update-skill-points']);

// Local State for UI selection
const selectedFaction = ref(null);
const selectedSpecialty = ref(null);

// Data Structure for Skill Tree (MVP)
const factions = [
  { id: 'Lumen', name: 'Lumen', desc: 'The Radiant Concord. Order, unity, and benevolent progress.' },
  { id: 'Umbra', name: 'Umbra', desc: 'The Veiled Discord. Transformation, individuality, and chaos.' },
];

const specialties = [
  { id: 'Arcane', name: 'Arcane', desc: 'Manipulating invisible magical currents.' },
  { id: 'Alchemist', name: 'Alchemist', desc: 'Understanding and reshaping the physical world.' },
];

// Subspecialties defined by Faction and Specialty
const subspecialties = {
  'Lumen': {
    'Arcane': [
      { id: 'glyphology', name: 'Glyphology', desc: 'Deciphering lost runes.', level: 0 },
      { id: 'divination', name: 'Divination', desc: 'Temporal and spatial sight.', level: 0 },
      { id: 'abjuration', name: 'Abjuration', desc: 'Mystical wards and shields.', level: 0 },
      { id: 'conjuration', name: 'Conjuration', desc: 'Planar binding.', level: 0 },
      { id: 'chronomancy', name: 'Chronomancy', desc: 'Temporal flux.', level: 0 },
    ],
    'Alchemist': [
      { id: 'transmutation', name: 'Transmutation', desc: 'Elemental conversion.', level: 0 },
      { id: 'potioncraft', name: 'Potioncraft', desc: 'Elixirs and brews.', level: 0 },
      { id: 'homunculus', name: 'Homunculus', desc: 'Artificial life.', level: 0 },
      { id: 'metallurgy', name: 'Metallurgy', desc: 'Enchanted alloys.', level: 0 },
      { id: 'aetheric', name: 'Aetheric Realm', desc: 'Reality shaping.', level: 0 },
    ],
  },
  'Umbra': {
    'Arcane': [
      { id: 'shadow_glyphs', name: 'Shadow Glyphs', desc: 'Nocturnal runes.', level: 0 },
      { id: 'void_sight', name: 'Void Sight', desc: 'Seeing the unseen.', level: 0 },
      { id: 'cursed_wards', name: 'Cursed Wards', desc: 'Defensive magic.', level: 0 },
      { id: 'shadow_binding', name: 'Shadow Binding', desc: 'Binding shadows.', level: 0 },
      { id: 'entropy', name: 'Entropy', desc: 'Chaos manipulation.', level: 0 },
    ],
    'Alchemist': [
      { id: 'corruption', name: 'Corruption', desc: 'Vile transmutations.', level: 0 },
      { id: 'poison', name: 'Poisoncraft', desc: 'Toxic brews.', level: 0 },
      { id: 'golem', name: 'Golem', desc: 'Living constructs.', level: 0 },
      { id: 'dark_metal', name: 'Dark Metallurgy', desc: 'Enchanted dark metals.', level: 0 },
      { id: 'void_realm', name: 'Void Realm', desc: 'Reality distortion.', level: 0 },
    ],
  },
};

// Computed: Available nodes based on current selection
const availableNodes = computed(() => {
  if (!selectedFaction.value || !selectedSpecialty.value) return [];

  const factionData = subspecialties[selectedFaction.value];
  if (!factionData) return [];

  const specialtyData = factionData[selectedSpecialty.value];
  if (!specialtyData) return [];

  return specialtyData;
});

// Actions
const selectFaction = (id) => {
  selectedFaction.value = id;
  // Reset specialty if faction changes
  selectedSpecialty.value = null;
};

const selectSpecialty = (id) => {
  selectedSpecialty.value = id;
};

const spendSkillPoint = (node) => {
  if (props.skillPoints > 0 && !node.unlocked) {
    // Deduct point
    emit('update-skill-points', -1);
    // Unlock node
    node.unlocked = true;
    node.level = 1;
  }
};

const resetSkills = () => {
  if (props.skillPoints > 0) {
    emit('update-skill-points', -props.skillPoints);
    // Reset local state
    selectedFaction.value = null;
    selectedSpecialty.value = null;
    // Reset nodes
    Object.values(subspecialties).forEach(faction => {
      Object.values(faction).forEach(specialty => {
        specialty.forEach(node => {
          node.unlocked = false;
          node.level = 0;
        });
      });
    });
  }
};
</script>

<style scoped>
/* Scoped styles */
</style>
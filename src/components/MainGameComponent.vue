<template>
  <div :class="[themeClasses.primaryBg, themeClasses.primaryText, 'flex flex-col h-screen w-full font-sans overflow-hidden']">
    <header :class="[themeClasses.headerBg, themeClasses.headerText, 'shadow-lg border-b', themeClasses.accentBorder, themeClasses.shadowColor, 'flex items-center justify-between p-4']">
      <!-- Title and stats now inherit text color from headerText -->
      <h1 class="text-3xl font-serif tracking-wide">The Arcane Scholar’s Legacy || {{ characterDetails.name }}</h1>
      <div class="flex items-center space-x-4">
        <span class="text-lg">Prestige: <span class="font-bold text-2xl">{{ characterDetails.prestige }}</span></span>
        <span class="text-lg">Skill Points: <span class="font-bold text-2xl">{{ skillPoints }}</span></span>
        <span class="text-lg">Knowledge: <span class="font-bold text-2xl">{{ formatLargeNumber(displayedKnowledge) }}</span></span>

        <!-- Buttons now use dynamic theme classes -->
        <button @click="saveGameProgress"
                :disabled="saving"
                :class="[themeClasses.buttonBg, themeClasses.buttonText, themeClasses.buttonHover, 'font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed']">
          {{ saving ? 'Saving...' : 'Save Progress' }}
        </button>

        <button @click="returnToCharacterSelect"
                :class="[themeClasses.buttonSecondaryBg, themeClasses.buttonSecondaryText, themeClasses.buttonSecondaryHover, 'font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out']">
          Back to Characters
        </button>

        <button @click="handleLogout"
                :class="[themeClasses.buttonUrgentBg, themeClasses.buttonUrgentText, themeClasses.buttonUrgentHover, 'font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out']">
          Log Out
        </button>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      
      <nav :class="[themeClasses.sidebarBg, 'transition-all duration-300 p-4 border-r', themeClasses.accentBorder, 'flex flex-col space-y-3',
                    isMenuCollapsed ? 'w-20' : 'w-1/5 min-w-[180px]']">
        
        <div class="flex items-center" :class="isMenuCollapsed ? 'justify-center' : 'justify-between'">
          
          <!-- Menu title inherits text color -->
          <h3 :class="['text-xl font-serif pb-2 mb-4 transition-opacity border-b', themeClasses.accentBorder, themeClasses.primaryText,
                       isMenuCollapsed ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100']">
            Sanctum Menu
          </h3>

          <button @click="toggleMenu" 
                  class="p-2 rounded-full hover:opacity-80 transition duration-150 flex-shrink-0" 
                  :class="themeClasses.primaryText"
                  :title="isMenuCollapsed ? 'Expand Menu' : 'Collapse Menu'">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 :class="['w-6 h-6 transform transition-transform duration-300', isMenuCollapsed ? 'rotate-180' : '']" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <button v-for="menuItem in menuItems" :key="menuItem.id"
                @click="activeMenu = menuItem.id"
                :class="['text-left py-2 rounded-lg transition duration-200 ease-in-out flex items-center',
                         activeMenu === menuItem.id ? [themeClasses.activeMenuBg, themeClasses.activeMenuText, 'shadow-inner'] : ['hover:opacity-80', themeClasses.primaryText],
                         isMenuCollapsed ? 'justify-center px-0' : 'px-4 space-x-3']">
          
          <span :class="['text-2xl flex-shrink-0', isMenuCollapsed ? 'mx-auto' : '']" :title="isMenuCollapsed ? menuItem.name : ''">
            {{ menuItem.icon }}
          </span>
          
          <span v-if="!isMenuCollapsed" class="whitespace-nowrap overflow-hidden">
            {{ menuItem.name }}
          </span>
        </button>
      </nav>

      <main :class="['flex-1 p-6 overflow-y-auto custom-scrollbar', themeClasses.primaryBg]">
        <!-- All child components now receive the updated themeClasses prop -->
        <SanctumView
          v-if="activeMenu === 'sanctum'"
          :knowledge="knowledge"
          :multiplierTiers="multiplierTiers"
          :passiveKnowledgeGain="passiveKnowledgeGain"
          :characterDetails="characterDetails"
          :theme-classes="themeClasses"
          :currentTierIndex="currentTierIndex"
          @generate-knowledge="generateKnowledge"
          @buy-multiplier="buyMultiplier"
          @advance-tier="advanceToNextTier"
        />
        <ResearchView 
          v-else-if="activeMenu === 'research'" 
          :theme-classes="themeClasses"
        />
        <ExpeditionsView 
          v-else-if="activeMenu === 'expeditions'" 
          :theme-classes="themeClasses"
        />
        <InventoryView 
          v-else-if="activeMenu === 'inventory'" 
          :theme-classes="themeClasses"
        />
        <SkillTreeView 
          v-else-if="activeMenu === 'skill-tree'" 
          :theme-classes="themeClasses"
        />
        <ClassificationView 
          v-else-if="activeMenu === 'classification'" 
          :theme-classes="themeClasses"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { defineProps, defineEmits } from 'vue';

// Import the view components (Assumed to exist)
import SanctumView from './SanctumView.vue';
import ResearchView from './ResearchView.vue';
import ExpeditionsView from './ExpeditionsView.vue';
import InventoryView from './InventoryView.vue';
import SkillTreeView from './SkillTreeView.vue';
import ClassificationView from './ClassificationView.vue';

const props = defineProps({
  userId: { type: String, required: true },
  characterId: { type: String, required: true }
});

const emit = defineEmits(['returnToCharacterSelect']);

const knowledge = ref(0);
const displayedKnowledge = ref(0);

// ADDED location to characterDetails
const characterDetails = ref({ name: '', faction: '', specialty: '', prestige: 0, location: '' });

const multiplierTiers = ref([]);
const activeMenu = ref('sanctum');
const saving = ref(false);
const isMenuCollapsed = ref(false); 
const currentTierIndex = ref(0); 
const skillPoints = ref(0); 

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- UTILITY: Format Large Numbers (K, M, B, T) ---
const formatLargeNumber = (num) => {
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
        formatted = scaled.toFixed(2);
      } else if (scaled < 100) {
        formatted = scaled.toFixed(1);
      } else {
        formatted = Math.floor(scaled).toString();
      }

      formatted = formatted.replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
      
      return formatted + symbol;
    }
  }
  
  return num.toFixed(2); 
};
// --- END UTILITY ---


// --- NEW THEME LOGIC ---
const themeClasses = computed(() => {
  const { faction, specialty } = characterDetails.value;

  // 1. Default Theme (Fallback)
  let theme = {
    primaryBg: 'bg-white',
    primaryText: 'text-black',
    headerBg: 'bg-gray-800',
    headerText: 'text-white',
    accentBorder: 'border-gray-400',
    sidebarBg: 'bg-gray-100',
    activeMenuBg: 'bg-gray-300',
    activeMenuText: 'text-black',
    shadowColor: 'shadow-gray-500/30',
    // Buttons
    buttonBg: 'bg-blue-600',
    buttonText: 'text-white',
    buttonHover: 'hover:bg-blue-700',
    buttonSecondaryBg: 'bg-gray-500',
    buttonSecondaryText: 'text-white',
    buttonSecondaryHover: 'hover:bg-gray-600',
    buttonUrgentBg: 'bg-red-600',
    buttonUrgentText: 'text-white',
    buttonUrgentHover: 'hover:bg-red-700',
  };

  // 2. Role-Based Palettes
  if (faction === 'Lumen') {
    if (specialty === 'Alchemist') {
      // Palette: #13c2eb, #bd895b, #fc963a, #5e9aa7, #7d6b5b
      // SWAPPED: Button is now Orange, Active Menu is Cyan
      theme = {
        primaryBg: 'bg-white',
        primaryText: 'text-[#7d6b5b]', // Darkest brown for text
        headerBg: 'bg-[#13c2eb]',      // Cyan blue for header
        headerText: 'text-white',
        accentBorder: 'border-[#bd895b]', // Brown for borders
        sidebarBg: 'bg-gray-50',         // Off-white sidebar
        activeMenuBg: 'bg-[#13c2eb]',  // Cyan for active
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#13c2eb]/30', // Cyan shadow
        // Buttons
        buttonBg: 'bg-[#fc963a]', // Orange button
        buttonText: 'text-white',
        buttonHover: 'hover:bg-[#e0862a]', // Darker orange
        buttonSecondaryBg: 'bg-[#7d6b5b]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#6b5a4a]',
        buttonUrgentBg: 'bg-red-600',
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-700',
      };
    } else if (specialty === 'Arcane') {
      // Palette: #eea221, #5b8abd, #3a98fc, #a78d5e, #5b6c7d
      // SWAPPED: Button is now Gold, Active Menu is Blue
      theme = {
        primaryBg: 'bg-white',
        primaryText: 'text-[#5b6c7d]', // Dark grey-blue for text
        headerBg: 'bg-[#eea221]',      // Same for header
        headerText: 'text-white',
        accentBorder: 'border-[#a78d5e]', // Muted gold for borders
        sidebarBg: 'bg-gray-50',
        activeMenuBg: 'bg-[#3a98fc]',  // Bright blue for active
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#3a98fc]/30', // Bright blue shadow
        // Buttons
        buttonBg: 'bg-[#3a98fc]', // Gold button
        buttonText: 'text-white', // Gold needs black text
        buttonHover: 'hover:bg-[#3386DF]', // Darker blue
        buttonSecondaryBg: 'bg-[#5b8abd]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#4a77a8]',
        buttonUrgentBg: 'bg-red-600',
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-700',
      };
    }
  } else if (faction === 'Umbra') {
    if (specialty === 'Alchemist') {
      // Palette: #55cd4a, #704460, #b03f85, #415b3f, #332c30
      // (Unchanged)
      theme = {
        primaryBg: 'bg-[#332c30]',      // Dark brown-grey bg
        primaryText: 'text-{gray-200}',    // Off-white text
        headerBg: 'bg-[#55cd4a]',      // Bright green header
        headerText: 'text-[#b03f85]',    // Bright green header text
        accentBorder: 'border-[#704460]', // Purple border
        sidebarBg: 'bg-[#332c30]',      // Same as primary bg
        activeMenuBg: 'bg-[#b03f85]',  // Bright magenta active
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#b03f85]/30', // Magenta shadow
        // Buttons
        buttonBg: 'bg-[#b03f85]',
        buttonText: 'text-black',
        buttonHover: 'hover:bg-[#93356F]',
        buttonSecondaryBg: 'bg-[#704460]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#5f3951]',
        buttonUrgentBg: 'bg-red-500', // Brighter red on dark bg
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-600',
      };
    } else if (specialty === 'Arcane') {
      // Palette: #611462, #7fbd5b, #82fc3a, #a65ea6, #687d5b (fixed typo)
      // (Unchanged)
      theme = {
        primaryBg: 'bg-[#687d5b]',    // Muted green bg
        primaryText: 'text-black',
        headerBg: 'bg-[#611462]',      // Deep purple header
        headerText: 'text-[#82fc3a]',    // Bright lime header text
        accentBorder: 'border-[#a65ea6]', // Lighter purple border
        sidebarBg: 'bg-[#687d5b]',
        activeMenuBg: 'bg-[#7fbd5b]',  // Muted green active
        activeMenuText: 'text-black',
        shadowColor: 'shadow-[#82fc3a]/30', // Lime shadow
        // Buttons
        buttonBg: 'bg-[#82fc3a]',
        buttonText: 'text-black',
        buttonHover: 'hover:bg-[#73e334]',
        buttonSecondaryBg: 'bg-[#687d5b]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#56684a]',
        buttonUrgentBg: 'bg-red-500',
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-600',
      };
    }
  }

  return theme;
});
// --- END NEW THEME LOGIC ---


const toggleMenu = () => {
  isMenuCollapsed.value = !isMenuCollapsed.value;
};

// --- PRESTIGE MULTIPLIER ---
const prestigeMultiplier = computed(() => {
  // Base bonus is 0.5% (0.005) per prestige level
  return 1 + (characterDetails.value.prestige * 0.10);
});
// --- END PRESTIGE MULTIPLIER ---

// --- DYNAMIC getTierName (Crucial function, replicated in ClassificationView) ---
const getTierName = (tierIndex) => {
    const { faction, specialty } = characterDetails.value;
    
    let names = [
        "Novice Whispers", "Apprentice Glyphs", "Adept's Tomes", "Mystic Runes", "Etheric Weavings",
        "Celestial Charts", "Planar Bindings", "Chronomancer's Texts", "Abjurer's Wards", "Transmuter's Circles",
        "Grandmaster's Codex", "Archmage's Grimoire", "Aetheric Formulas", "Cosmic Inscriptions", "Reality Equations",
        "Void Manuscripts", "Primordial Truths", "Ascendant Doctrines", "God-Hand Schematics", "Nexus of All Knowledge"
    ];

    if (faction === 'Lumen') {
        if (specialty === 'Arcane') {
            names = [
                "Solar Inscriptions", "Starfire Studies", "Aetheric Lumina", "Ascendant Cantrips", "Chalice of Radiance",
                "Empyrean Scrolls", "Divine Geometry", "Sunsong Orbs", "Sanctified Wards", "Radiant Transcriptions",
                "The Holy Codex", "High Archon's Primer", "Light-Form Formulas", "Cosmic Alignment", "Edicts of Truth",
                "Ethereal Scripts", "Primal Genesis", "Edicts of the Source", "Schema of Creation", "Heart of the Cosmos"
            ];
        } else if (specialty === 'Alchemist') {
            names = [
                "Bright Concoctions", "Verdant Formulas", "Golden Retorts", "Elixirs of Life", "Vials of Purity",
                "Reagent Catalysts", "Alchemical Transmutations", "Crystals of Growth", "Stable Solutions", "The Great Work",
                "Philosopher's Stone", "Magnum Opus", "Homunculus Formulas", "Symphony of Elements", "Apothecary's Vault",
                "True Essences", "Materia Prima", "The Unbreakable Bond", "Perfect Synthesis", "Wellspring of Vitality"
            ];
        }
    } else if (faction === 'Umbra') {
        if (specialty === 'Arcane') {
            names = [
                "Shadowed Whispers", "Nocturnal Glyphs", "Voidweaver Texts", "Ebon Incantations", "Sepulchral Weavings",
                "Forbidden Scrolls", "The Black Geometry", "Moonshard Orbs", "Cursed Wards", "Malefic Transcriptions",
                "The Shadow Codex", "Necromancer's Grimoire", "Dark Matter Formulas", "Cosmic Discord", "Equations of Decay",
                "Void Manuscripts", "Primal Entropy", "Doctrines of the End", "Schema of Annihilation", "Heart of the Void"
            ];
        } else if (specialty === 'Alchemist') {
            names = [
                "Crimson Brews", "Corrupted Essences", "Blackened Crucibles", "Tinctures of Dread", "Sanguine Phials",
                "Venomous Catalysts", "Vile Transmutations", "Crystals of Stasis", "Unstable Solutions", "The Lesser Work",
                "Blood Stone", "Abyss Opus", "Gargoyle Formulas", "Dissonant Elements", "Poisoner's Vault",
                "Dark Essences", "Materia Tenebrae", "The Broken Bond", "Failed Synthesis", "Wellspring of Pestilence"
            ];
        }
    }
    
    return names[tierIndex] || `Esoteric Tier ${tierIndex + 1}`;
};
// --- END DYNAMIC getTierName ---

// --- DYNAMIC getMultiplierNames ---
const getMultiplierNames = () => {
  const { faction, specialty } = characterDetails.value;
  
  let names = ['Conduits', 'Scrolls', 'Crystals', 'Orbs'];

  if (faction === 'Lumen') {
    if (specialty === 'Arcane') {
        names = ['Light Channels', 'Sunstone Tablets', 'Prismatic Focus', 'Aether Orbs'];
    } else if (specialty === 'Alchemist') {
        names = ['Flow Regulators', 'Reagent Formulas', 'Growth Crystals', 'Stabilizing Orbs'];
    }
  } else if (faction === 'Umbra') {
    if (specialty === 'Arcane') {
        names = ['Shadow Conduits', 'Ebon Runes', 'Void Shards', 'Lunar Orbs'];
    } else if (specialty === 'Alchemist') {
        names = ['Corrupting Vents', 'Necrotic Pages', 'Binding Agents', 'Decay Orbs'];
    }
  }
  
  return names;
};
// --- END DYNAMIC getMultiplierNames ---

// --- generateMultiplierTiers (Prestige applied to baseEffect) ---
const generateMultiplierTiers = () => {
  const tiers = [];
  const baseNames = getMultiplierNames(); 
  
  // Get the current prestige multiplier value now.
  const currentPrestigeMultiplier = prestigeMultiplier.value;

  for (let i = 0; i < 20; i++) {
    const tierPower = Math.pow(1.8, i);
    const tierCostScale = Math.pow(8, i);
    
    const maxLevel = 20 + (i * 20);

    tiers.push({
      name: `Tier ${i + 1}: ${getTierName(i)}`,
      unlocked: i === 0, 
      multipliers: baseNames.map((name, j) => ({
        level: 0,
        maxLevel: maxLevel,
        
        // baseCost is a stored value for scaling. Cost discount applied in getNextLevelCost.
        baseCost: (10 + j * 40) * tierCostScale, 
        costMultiplier: 1.09 + (i * 0.01),
        
        // Base Effect is boosted by the prestige multiplier.
        baseEffect: (0.1 + j * 0.4) * tierPower * currentPrestigeMultiplier, 
        effectMultiplier: 1.10 + (i * 0.005),
        name: name
      }))
    });
  }
  return tiers;
};
// --- END generateMultiplierTiers ---

// --- passiveKnowledgeGain (Prestige applied to final gain) ---
const passiveKnowledgeGain = computed(() => {
  let totalGain = 0;
  multiplierTiers.value.forEach(tier => {
    if (tier.unlocked) { 
      tier.multipliers.forEach(item => {
        if (item.level > 0) {
          // item.baseEffect already includes the prestige multiplier from generateMultiplierTiers
          totalGain += item.baseEffect * Math.pow(item.effectMultiplier, item.level - 1);
        }
      });
    }
  });
  
  // No need to multiply by prestigeMultiplier.value here since baseEffect already includes it.
  // This keeps the totalGain logic clean and avoids double-dipping the bonus.
  return totalGain; 
});
// --- END passiveKnowledgeGain ---

// --- generateKnowledge (Grants passive gain instantly) ---
const generateKnowledge = () => { 
    // The passiveKnowledgeGain already includes the prestige bonus.
    knowledge.value += passiveKnowledgeGain.value || 1; 
};
// --- END generateKnowledge ---

// --- getNextLevelCost (Prestige applied as cost discount) ---
const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = multiplierTiers.value[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  
  // Base Cost is discounted by the Prestige Multiplier.
  const baseCostDiscounted = item.baseCost / prestigeMultiplier.value;
  
  return baseCostDiscounted * Math.pow(item.costMultiplier, item.level);
};
// --- END getNextLevelCost ---

// --- buyMultiplier Logic (Unchanged) ---
const buyMultiplier = ({ tierIndex, multiplierIndex }) => {
  const tier = multiplierTiers.value[tierIndex];
  const item = tier?.multipliers[multiplierIndex];
  if (!item) return;

  if (item.level >= item.maxLevel) {
      return; 
  }

  const cost = getNextLevelCost(tierIndex, multiplierIndex);
  if (knowledge.value >= cost) {
    knowledge.value -= cost;
    item.level += 1;
    
    if (item.level === item.maxLevel) {
        const allMaxed = tier.multipliers.every(m => m.level === m.maxLevel);

        if (allMaxed) {
            if (multiplierTiers.value[tierIndex + 1]) {
                multiplierTiers.value[tierIndex + 1].unlocked = true;
            }
        }
    }
    
    saveGameProgress();
  }
};
// --- END buyMultiplier Logic ---

// --- NEW: initiatePrestige Function ---
const initiatePrestige = () => {
  const oldPrestige = characterDetails.value.prestige;
  characterDetails.value.prestige += 1;
  
  // Check for Skill Point Reward: 1 point every 10 levels
  if (characterDetails.value.prestige > 0 && characterDetails.value.prestige % 10 === 0) {
    skillPoints.value += 1;
  }
  
  // Reset Core Game State
  knowledge.value = 0;
  displayedKnowledge.value = 0;
  currentTierIndex.value = 0;
  
  // Reset Tiers: This call automatically uses the new prestige level for increased base stats.
  multiplierTiers.value = generateMultiplierTiers(); 
  
  saveGameProgress();
  
  console.log(`PRESTIGE UP! Level: ${characterDetails.value.prestige}. Skill Points: ${skillPoints.value}`);
};
// --- END NEW: initiatePrestige Function ---


// --- MODIFIED advanceToNextTier (handles final tier check) ---
const advanceToNextTier = () => {
  const currentTier = multiplierTiers.value[currentTierIndex.value];
  const nextTierExists = multiplierTiers.value[currentTierIndex.value + 1];
  
  if (!currentTier || !currentTier.multipliers.every(m => m.level === m.maxLevel)) {
    return;
  }
  
  if (!nextTierExists) {
    // Maxed out the very last tier (Tier 20)
    initiatePrestige();
  } else if (multiplierTiers.value[currentTierIndex.value + 1].unlocked) {
    // Advancing to a normal, existing next tier
    currentTierIndex.value += 1; 
    saveGameProgress();
  }
};
// --- END MODIFIED advanceToNextTier ---

// --- Save Game Progress (UPDATED for Leaderboard with currentTierIndex) ---
const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const userId = auth.currentUser.uid;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${userId}/characters`, props.characterId);
  const leaderboardDocRef = doc(db, `artifacts/${appId}/public/data/leaderboard`, props.characterId); // New Ref

  // Private Character Save Data
  const privateSaveData = {
    knowledge: knowledge.value,
    prestige: characterDetails.value.prestige,
    currentTierIndex: currentTierIndex.value, 
    multiplierTiers: multiplierTiers.value.map(tier => ({
        unlocked: tier.unlocked,
        levels: tier.multipliers.map(m => m.level)
    })),
    skillPoints: skillPoints.value, 
    lastSaved: Timestamp.now(),
  };

  // Public Leaderboard Data (must match the fields needed by ClassificationView)
  const publicLeaderboardData = {
    name: characterDetails.value.name,
    prestige: characterDetails.value.prestige,
    faction: characterDetails.value.faction,
    specialty: characterDetails.value.specialty,
    location: characterDetails.value.location, 
    userId: userId, 
    currentTierIndex: currentTierIndex.value, // <-- NEW: Include Tier Index
    lastUpdated: Timestamp.now(),
  };

  try {
    // 1. Save Private Game State
    await setDoc(characterDocRef, privateSaveData, { merge: true });

    // 2. Save Public Leaderboard Entry
    await setDoc(leaderboardDocRef, publicLeaderboardData, { merge: true });
    
  } catch (error) {
    console.error('Error saving game progress:', error);
  } finally {
    saving.value = false;
  }
};
// --- END Save Game Progress ---

// --- Load Game Progress (Updated for skillPoints and location) ---
const loadGameProgress = async () => {
  if (!auth.currentUser || !props.characterId) return;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  
  try {
    const docSnap = await getDoc(characterDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Load character details first (Crucial for generating correct names/stats)
      characterDetails.value.name = data.name || 'Scholar';
      characterDetails.value.faction = data.faction || '';
      characterDetails.value.specialty = data.specialty || '';
      characterDetails.value.prestige = data.prestige || 0;
      characterDetails.value.location = data.location || ''; 
      
      // Load new state variables
      skillPoints.value = data.skillPoints || 0; 
      currentTierIndex.value = data.currentTierIndex || 0;

      // Regenerate tiers now (this incorporates the loaded prestige level)
      const generatedTiers = generateMultiplierTiers();

      if (data.multiplierTiers) {
        data.multiplierTiers.forEach((savedTier, tierIndex) => {
          if (generatedTiers[tierIndex]) {
            generatedTiers[tierIndex].unlocked = savedTier.unlocked;
            savedTier.levels.forEach((level, multiplierIndex) => {
              if (generatedTiers[tierIndex].multipliers[multiplierIndex]) {
                generatedTiers[tierIndex].multipliers[multiplierIndex].level = level;
              }
            });
          }
        });
      }
      multiplierTiers.value = generatedTiers;

      const loadedKnowledge = data.knowledge || 0;

      if (data.lastSaved && passiveKnowledgeGain.value > 0) {
        const timeElapsedSeconds = (new Date().getTime() - data.lastSaved.toDate().getTime()) / 1000;
        knowledge.value = timeElapsedSeconds > 0 ? loadedKnowledge + (timeElapsedSeconds * passiveKnowledgeGain.value) : loadedKnowledge;
      } else {
        knowledge.value = loadedKnowledge;
      }
      
      displayedKnowledge.value = knowledge.value;

    } else {
      // Default initialization if no save data exists
      multiplierTiers.value = generateMultiplierTiers();
      knowledge.value = 0;
      displayedKnowledge.value = 0;
      currentTierIndex.value = 0;
      skillPoints.value = 0;
    }
  } catch (error) {
    console.error('Error loading game progress:', error);
    multiplierTiers.value = generateMultiplierTiers();
  }
};
// --- END Load Game Progress ---

let animationFrameId = null;
watch(knowledge, (newValue) => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  const animate = () => {
    const difference = newValue - displayedKnowledge.value;
    const step = difference / 20;
    if (Math.abs(difference) < 0.01) {
      displayedKnowledge.value = newValue;
      animationFrameId = null;
    } else {
      displayedKnowledge.value += step;
      animationFrameId = requestAnimationFrame(animate);
    }
  };
  animate();
});

const handleLogout = async () => {
  await saveGameProgress();
  await auth.signOut();
};

const returnToCharacterSelect = async () => {
  await saveGameProgress();
  emit('returnToCharacterSelect');
};

let knowledgeInterval = null;
onMounted(() => {
  loadGameProgress(); 
  knowledgeInterval = setInterval(() => {
    if (passiveKnowledgeGain.value > 0) {
        knowledge.value += passiveKnowledgeGain.value;
    }
  }, 1000);
});

onUnmounted(async () => {
  if (knowledgeInterval) clearInterval(knowledgeInterval);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  await saveGameProgress();
});

const menuItems = [
  { id: 'sanctum', name: 'Sanctum / Home', icon: '🏠' },
  { id: 'research', name: 'Research', icon: '🔬' },
  { id: 'expeditions', name: 'Expeditions', icon: '🗺️' },
  { id: 'inventory', name: 'Inventory', icon: '🧰' },
  { id: 'skill-tree', name: 'Skill Tree', icon: '🌳' },
  { id: 'classification', name: 'Classification', icon: '📜' },
];
</script>

<style scoped>
/* Standard custom scrollbar styling */
.custom-scrollbar::-webkit-scrollbar { width: 12px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-radius: 10px; border: 3px solid #f0f0f0; }

/* Light theme scrollbar */
.bg-white.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; }
.bg-white.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-color: #f0f0f0; }
.bg-gray-50.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; }
.bg-gray-50.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-color: #f0f0f0; }


/* Dark theme scrollbar (Umbra Arcane) */
.bg-black.custom-scrollbar::-webkit-scrollbar-track { background: #222; }
.bg-black.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #82fc3a; border-color: #222; }

/* Dark theme scrollbar (Umbra Alchemist) */
.bg-\[\#332c30\].custom-scrollbar::-webkit-scrollbar-track { background: #222; }
.bg-\[\#332c30\].custom-scrollbar::-webkit-scrollbar-thumb { background-color: #b03f85; border-color: #222; }


/* The main content area should handle its own scrolling */
main {
    height: 100%;
}
</style>


<template>
  <!-- 
    The main layout is simplified. 
    It's now a flex-col container. The header is at the top,
    the main content fills the space, and the nav dock floats on top.
  -->
  <div :class="[themeClasses.primaryBg, themeClasses.primaryText, 'flex flex-col h-screen w-full font-sans overflow-hidden']">
    
    <!-- 
      HEADER: RESPONSIVE CHANGES
    -->
    <header :class="[themeClasses.headerBg, themeClasses.headerText, 'shadow-lg border-b', themeClasses.accentBorder, themeClasses.shadowColor, 'flex flex-nowrap items-center justify-between p-2 z-20']">
      
      <!-- 
        TITLE: RESPONSIVE CHANGES
      -->
      <h1 class="text-xl lg:text-3xl font-serif tracking-wide text-left truncate flex items-center space-x-2 flex-shrink min-w-0" :title="`The Arcane Scholar’s Legacy || ${characterDetails.name}`">
        <!-- Mobile View: Logo + Name -->
        <span class="lg:hidden flex items-center space-x-2">
          <img src="/src/assets/logo.svg" alt="The Arcane Scholar's Legacy" class="h-8 w-8"> <!-- Logo -->
          <span class="truncate text-lg">{{ characterDetails.name }}</span> <!-- Font size reduced -->
        </span>
        <!-- Desktop View: Logo + Full Title + Name -->
        <span class="hidden lg:flex items-center space-x-3">
          <img src="/src/assets/logo.svg" alt="The Arcane Scholar's Legacy" class="h-10 w-10"> <!-- Logo -->
          <span class="truncate">The Arcane Scholar’s Legacy || {{ characterDetails.name }}</span>
        </span>
      </h1>
      
      <!-- 
        STATS & BUTTONS CONTAINER: 
      -->
      <div class="flex items-center justify-end ml-auto flex-shrink-0">
        <!-- Stats Container: Groups stats together -->
        <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
          <!-- Stats -->
          <span class="flex items-center space-x-1" title="Prestige">
            <span class="text-lg lg:text-xl">💎</span>
            <span class="font-bold text-base lg:text-xl min-w-[3rem] lg:min-w-[4rem] text-right">{{ characterDetails.prestige }}</span>
            <span class="hidden lg:inline text-sm lg:text-lg ml-1">Prestige</span>
          </span>
          <span class="flex items-center space-x-1" title="Skill Points">
            <span class="text-lg lg:text-xl">✨</span>
            <span class="font-bold text-base lg:text-xl min-w-[3rem] lg:min-w-[4rem] text-right">{{ skillPoints }}</span>
            <span class="hidden lg:inline text-sm lg:text-lg ml-1">Skill Points</span>
          </span>
          <span class="flex items-center space-x-1" title="Knowledge">
            <span class="text-lg lg:text-xl">🧠</span>
            <span class="font-bold text-base lg:text-xl min-w-[3rem] lg:min-w-[4rem] text-right">{{ formatLargeNumber(displayedKnowledge) }}</span>
            <span class="hidden lg:inline text-sm lg:text-lg ml-1">Knowledge</span>
          </span>
        </div>

        <!-- Buttons Container: Groups buttons together -->
        <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 ml-2 lg:ml-4">
          <!-- 
            BUTTONS: RESPONSIVE CHANGES
            - Icon-only on mobile (p-2)
          -->
          <button @click="saveGameProgress"
                  :disabled="saving"
                  :class="[themeClasses.buttonBg, themeClasses.buttonText, themeClasses.buttonHover, 'font-bold p-2 lg:py-2 lg:px-4 text-sm lg:text-base rounded-md lg:rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center', saving ? 'opacity-50 cursor-not-allowed' : '']"
                  title="Save Game">
            <span class="text-xl lg:text-base">💾</span>
            <span class="hidden lg:inline ml-2">{{ saving ? 'Saving...' : 'Save' }}</span>
          </button>
          <button @click="returnToCharacterSelect"
                  :class="[themeClasses.buttonSecondaryBg, themeClasses.buttonSecondaryText, themeClasses.buttonSecondaryHover, 'font-bold p-2 lg:py-2 lg:px-4 text-sm lg:text-base rounded-md lg:rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center']"
                  title="Back to Select">
            <span class="text-xl lg:text-base">↩️</span>
            <span class="hidden lg:inline ml-2">Back</span>
          </button>
          <button @click="handleLogout"
                  :class="[themeClasses.buttonUrgentBg, themeClasses.buttonUrgentText, themeClasses.buttonUrgentHover, 'font-bold p-2 lg:py-2 lg:px-4 text-sm lg:text-base rounded-md lg:rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center']"
                  title="Log Out">
            <span class="text-xl lg:text-base">🚪</span>
            <span class="hidden lg:inline ml-2">Log Out</span>
          </button>
        </div>
      </div>
      <!-- END of STATS & BUTTONS CONTAINER -->
    </header>

    <!-- 
      MAIN CONTENT AREA:
      - `<main>` now fills the remaining space (`flex-1`) and handles its own scrolling.
      - `pb-24` (padding-bottom) is crucial to prevent the new floating
        dock from covering content at the bottom of the scroll on mobile.
    -->
    <main :class="['flex-1 p-6 overflow-y-auto custom-scrollbar pb-24 lg:pb-6', themeClasses.primaryBg]">
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
        :class="[themeClasses.primaryBg, 'h-full']"
        :theme-classes="themeClasses"
      />
    </main>

    <!-- 
      *** NEW FLOATING DOCK ***
    -->
    <nav :class="[
        themeClasses.headerBg, 
        themeClasses.accentBorder, 
        'fixed bottom-0 left-0 right-0 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto lg:bottom-4',
        'flex items-center justify-around lg:justify-center',
        'p-1 lg:p-3', 
        'space-x-0 lg:space-x-2', 
        'lg:rounded-full shadow-2xl border z-50'
      ]">
      
      <!-- Dock Buttons -->
      <button 
        v-for="menuItem in menuItems" 
        :key="menuItem.id"
        @click="activeMenu = menuItem.id"
        :class="[
          'relative group rounded-full transition-all duration-200 ease-in-out',
          'transform hover:scale-110',
          'w-14 h-14 flex items-center justify-center lg:w-auto lg:h-auto lg:p-3', 
          activeMenu === menuItem.id 
            ? [themeClasses.activeMenuBg, themeClasses.activeMenuText, 'scale-110 shadow-inner'] 
            : [themeClasses.headerText, 'opacity-70 hover:opacity-100']
        ]"
        :title="menuItem.name"
      >
        
        <span class="text-3xl lg:text-3xl flex-shrink-0">
          {{ menuItem.icon }}
        </span>
        
        <!-- Tooltip -->
        <span :class="[
            themeClasses.sidebarBg, 
            themeClasses.primaryText,
            'absolute bottom-full mb-2 left-1/2 -translate-x-1/2',
            'px-3 py-1 rounded-md text-sm font-medium shadow-lg',
            'transition-all duration-150 scale-0 group-hover:scale-100 origin-bottom'
          ]">
          {{ menuItem.name }}
        </span>
      </button>
    </nav>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';

// Note: defineProps and defineEmits are compiler macros in <script setup> and do not need to be imported from 'vue'.

// Import the view components
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
const characterDetails = ref({ name: '', faction: '', specialty: '', prestige: 0, location: '' });
const multiplierTiers = ref([]);
const activeMenu = ref('sanctum');
const saving = ref(false);
const currentTierIndex = ref(0); 
const skillPoints = ref(0); 

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- UTILITY: Format Large Numbers (Unchanged) ---
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

// --- THEME LOGIC (Unchanged) ---
const themeClasses = computed(() => {
  const { faction, specialty } = characterDetails.value;
  let theme = {
    primaryBg: 'bg-white',
    primaryText: 'text-black',
    headerBg: 'bg-gray-800',
    headerText: 'text-white',
    accentBorder: 'border-gray-400',
    sidebarBg: 'bg-gray-100', // Used for tooltips now
    activeMenuBg: 'bg-blue-600', // Made active menu blue
    activeMenuText: 'text-white',
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
  };
  if (faction === 'Lumen') {
    if (specialty === 'Alchemist') {
      theme = {
        primaryBg: 'bg-white',
        primaryText: 'text-[#7d6b5b]',
        headerBg: 'bg-[#13c2eb]',
        headerText: 'text-white',
        accentBorder: 'border-[#bd895b]',
        sidebarBg: 'bg-gray-50',
        activeMenuBg: 'bg-[#fc963a]', // Active is orange
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#13c2eb]/30',
        buttonBg: 'bg-[#fc963a]',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-[#e0862a]',
        buttonSecondaryBg: 'bg-[#7d6b5b]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#6b5a4a]',
        buttonUrgentBg: 'bg-red-600',
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-700',
      };
    } else if (specialty === 'Arcane') {
      theme = {
        primaryBg: 'bg-white',
        primaryText: 'text-[#5b6c7d]',
        headerBg: 'bg-[#eea221]',
        headerText: 'text-white',
        accentBorder: 'border-[#a78d5e]',
        sidebarBg: 'bg-gray-50',
        activeMenuBg: 'bg-[#3a98fc]', // Active is blue
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#3a98fc]/30',
        buttonBg: 'bg-[#3a98fc]',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-[#3386DF]',
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
      theme = {
        primaryBg: 'bg-[#332c30]',
        primaryText: 'text-gray-200', // Fixed syntax
        headerBg: 'bg-[#55cd4a]',
        headerText: 'text-black', // Changed for visibility on green
        accentBorder: 'border-[#704460]',
        sidebarBg: 'bg-[#4a3d44]', // Darker sidebar for tooltips
        activeMenuBg: 'bg-[#b03f85]', // Active is magenta
        activeMenuText: 'text-white',
        shadowColor: 'shadow-[#b03f85]/30',
        buttonBg: 'bg-[#b03f85]',
        buttonText: 'text-white', // White text on magenta
        buttonHover: 'hover:bg-[#93356F]',
        buttonSecondaryBg: 'bg-[#704460]',
        buttonSecondaryText: 'text-white',
        buttonSecondaryHover: 'hover:bg-[#5f3951]',
        buttonUrgentBg: 'bg-red-500',
        buttonUrgentText: 'text-white',
        buttonUrgentHover: 'hover:bg-red-600',
      };
    } else if (specialty === 'Arcane') {
      theme = {
        primaryBg: 'bg-[#2a3b29]', // Darker green
        primaryText: 'text-gray-100', // Light text
        headerBg: 'bg-[#611462]',
        headerText: 'text-[#82fc3a]',
        accentBorder: 'border-[#a65ea6]',
        sidebarBg: 'bg-[#4d5c4c]', // Darker sidebar for tooltips
        activeMenuBg: 'bg-[#82fc3a]', // Active is lime
        activeMenuText: 'text-black', // Black text on lime
        shadowColor: 'shadow-[#82fc3a]/30',
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

// --- PRESTIGE MULTIPLIER (Unchanged) ---
const prestigeMultiplier = computed(() => {
  return 1 + (characterDetails.value.prestige * 0.10);
});

// --- TIER/MULTIPLIER NAME FUNCTIONS (Unchanged) ---
const getTierName = (tierIndex) => {
    const { faction, specialty } = characterDetails.value;
    let names = ["Novice Whispers", "Apprentice Glyphs", "Adept's Tomes", "Mystic Runes", "Etheric Weavings", "Celestial Charts", "Planar Bindings", "Chronomancer's Texts", "Abjurer's Wards", "Transmuter's Circles", "Grandmaster's Codex", "Archmage's Grimoire", "Aetheric Formulas", "Cosmic Inscriptions", "Reality Equations", "Void Manuscripts", "Primordial Truths", "Ascendant Doctrines", "God-Hand Schematics", "Nexus of All Knowledge"];
    if (faction === 'Lumen') {
        if (specialty === 'Arcane') names = ["Solar Inscriptions", "Starfire Studies", "Aetheric Lumina", "Ascendant Cantrips", "Chalice of Radiance", "Empyrean Scrolls", "Divine Geometry", "Sunsong Orbs", "Sanctified Wards", "Radiant Transcriptions", "The Holy Codex", "High Archon's Primer", "Light-Form Formulas", "Cosmic Alignment", "Edicts of Truth", "Ethereal Scripts", "Primal Genesis", "Edicts of the Source", "Schema of Creation", "Heart of the Cosmos"];
        else if (specialty === 'Alchemist') names = ["Bright Concoctions", "Verdant Formulas", "Golden Retorts", "Elixirs of Life", "Vials of Purity", "Reagent Catalysts", "Alchemical Transmutations", "Crystals of Growth", "Stable Solutions", "The Great Work", "Philosopher's Stone", "Magnum Opus", "Homunculus Formulas", "Symphony of Elements", "Apothecary's Vault", "True Essences", "Materia Prima", "The Unbreakable Bond", "Perfect Synthesis", "Wellspring of Vitality"];
    } else if (faction === 'Umbra') {
        if (specialty === 'Arcane') names = ["Shadowed Whispers", "Nocturnal Glyphs", "Voidweaver Texts", "Ebon Incantations", "Sepulchral Weavings", "Forbidden Scrolls", "The Black Geometry", "Moonshard Orbs", "Cursed Wards", "Malefic Transcriptions", "The Shadow Codex", "Necromancer's Grimoire", "Dark Matter Formulas", "Cosmic Discord", "Equations of Decay", "Void Manuscripts", "Primal Entropy", "Doctrines of the End", "Schema of Annihilation", "Heart of the Void"];
        else if (specialty === 'Alchemist') names = ["Crimson Brews", "Corrupted Essences", "Blackened Crucibles", "Tinctures of Dread", "Sanguine Phials", "Venomous Catalysts", "Vile Transmutations", "Crystals of Stasis", "Unstable Solutions", "The Lesser Work", "Blood Stone", "Abyss Opus", "Gargoyle Formulas", "Dissonant Elements", "Poisoner's Vault", "Dark Essences", "Materia Tenebrae", "The Broken Bond", "Failed Synthesis", "Wellspring of Pestilence"];
    }
    return names[tierIndex] || `Esoteric Tier ${tierIndex + 1}`;
};
const getMultiplierNames = () => {
  const { faction, specialty } = characterDetails.value;
  let names = ['Conduits', 'Scrolls', 'Crystals', 'Orbs'];
  if (faction === 'Lumen') {
    if (specialty === 'Arcane') names = ['Light Channels', 'Sunstone Tablets', 'Prismatic Focus', 'Aether Orbs'];
    else if (specialty === 'Alchemist') names = ['Flow Regulators', 'Reagent Formulas', 'Growth Crystals', 'Stabilizing Orbs'];
  } else if (faction === 'Umbra') {
    if (specialty === 'Arcane') names = ['Shadow Conduits', 'Ebon Runes', 'Void Shards', 'Lunar Orbs'];
    else if (specialty === 'Alchemist') names = ['Corrupting Vents', 'Necrotic Pages', 'Binding Agents', 'Decay Orbs'];
  }
  return names;
};

// --- GAME LOGIC FUNCTIONS ---
const generateMultiplierTiers = () => {
  const tiers = [];
  const baseNames = getMultiplierNames(); 
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
        baseCost: (10 + j * 40) * tierCostScale, 
        costMultiplier: 1.09 + (i * 0.01),
        baseEffect: (0.1 + j * 0.4) * tierPower * currentPrestigeMultiplier, 
        effectMultiplier: 1.10 + (i * 0.005),
        name: name
      }))
    });
  }
  return tiers;
};
const passiveKnowledgeGain = computed(() => {
  let totalGain = 0;
  multiplierTiers.value.forEach(tier => {
    if (tier.unlocked) { 
      tier.multipliers.forEach(item => {
        if (item.level > 0) {
          totalGain += item.baseEffect * Math.pow(item.effectMultiplier, item.level - 1);
        }
      });
    }
  });
  return totalGain; 
});
const generateKnowledge = () => { 
    knowledge.value += passiveKnowledgeGain.value || 1; 
};
const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = multiplierTiers.value[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  const baseCostDiscounted = item.baseCost / prestigeMultiplier.value;
  return baseCostDiscounted * Math.pow(item.costMultiplier, item.level);
};
const buyMultiplier = ({ tierIndex, multiplierIndex }) => {
  const tier = multiplierTiers.value[tierIndex];
  const item = tier?.multipliers[multiplierIndex];
  if (!item || item.level >= item.maxLevel) return;

  const cost = getNextLevelCost(tierIndex, multiplierIndex);
  if (knowledge.value >= cost) {
    knowledge.value -= cost;
    item.level += 1;
    if (item.level === item.maxLevel) {
        const allMaxed = tier.multipliers.every(m => m.level === m.maxLevel);
        if (allMaxed && multiplierTiers.value[tierIndex + 1]) {
            multiplierTiers.value[tierIndex + 1].unlocked = true;
        }
    }
    saveGameProgress();
  }
};
const initiatePrestige = () => {
  characterDetails.value.prestige += 1;
  if (characterDetails.value.prestige > 0 && characterDetails.value.prestige % 10 === 0) {
    skillPoints.value += 1;
  }
  knowledge.value = 0;
  displayedKnowledge.value = 0;
  currentTierIndex.value = 0;
  multiplierTiers.value = generateMultiplierTiers(); 
  saveGameProgress();
};
const advanceToNextTier = () => {
  const currentTier = multiplierTiers.value[currentTierIndex.value];
  const nextTierExists = multiplierTiers.value[currentTierIndex.value + 1];
  if (!currentTier || !currentTier.multipliers.every(m => m.level === m.maxLevel)) return;
  if (!nextTierExists) {
    initiatePrestige();
  } else if (multiplierTiers.value[currentTierIndex.value + 1].unlocked) {
    currentTierIndex.value += 1; 
    saveGameProgress();
  }
};
const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const userId = auth.currentUser.uid;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${userId}/characters`, props.characterId);
  const leaderboardDocRef = doc(db, `artifacts/${appId}/public/data/leaderboard`, props.characterId);
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
  const publicLeaderboardData = {
    name: characterDetails.value.name,
    prestige: characterDetails.value.prestige,
    faction: characterDetails.value.faction,
    specialty: characterDetails.value.specialty,
    location: characterDetails.value.location, 
    userId: userId, 
    currentTierIndex: currentTierIndex.value,
    lastUpdated: Timestamp.now(),
  };
  try {
    await setDoc(characterDocRef, privateSaveData, { merge: true });
    await setDoc(leaderboardDocRef, publicLeaderboardData, { merge: true });
  } catch (error) {
    console.error('Error saving game progress:', error);
  } finally {
    saving.value = false;
  }
};
const loadGameProgress = async () => {
  if (!auth.currentUser || !props.characterId) return;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  try {
    const docSnap = await getDoc(characterDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      characterDetails.value.name = data.name || 'Scholar';
      characterDetails.value.faction = data.faction || '';
      characterDetails.value.specialty = data.specialty || '';
      characterDetails.value.prestige = data.prestige || 0;
      characterDetails.value.location = data.location || ''; 
      skillPoints.value = data.skillPoints || 0; 
      currentTierIndex.value = data.currentTierIndex || 0;
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

// --- ANIMATION / LOGOUT FUNCTIONS (Unchanged) ---
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

// --- MENU ITEMS (Unchanged) ---
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
/* Custom scrollbar styles remain unchanged, 
  but they are now applied to the <main> element.
*/
.custom-scrollbar::-webkit-scrollbar { width: 12px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-radius: 10px; border: 3px solid #f0f0f0; }
.bg-white.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; }
.bg-white.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-color: #f0f0f0; }
.bg-gray-50.custom-scrollbar::-webkit-scrollbar-track { background: #f0f0f0; }
.bg-gray-50.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-color: #f0f0f0; }
.bg-\[\#332c30\].custom-scrollbar::-webkit-scrollbar-track { background: #222; }
.bg-\[\#332c30\].custom-scrollbar::-webkit-scrollbar-thumb { background-color: #b03f85; border-color: #222; }
.bg-\[\#2a3b29\].custom-scrollbar::-webkit-scrollbar-track { background: #1a2419; }
.bg-\[\#2a3b29\].custom-scrollbar::-webkit-scrollbar-thumb { background-color: #82fc3a; border-color: #1a2419; }

</style>
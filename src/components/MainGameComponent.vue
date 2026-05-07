<template>
  <div :class="[themeClasses.primaryBg, themeClasses.primaryText, 'flex flex-col h-screen w-full font-sans overflow-hidden']">
    
    <header :class="[themeClasses.headerBg, themeClasses.headerText, 'shadow-lg border-b', themeClasses.accentBorder, themeClasses.shadowColor, 'flex flex-nowrap items-center justify-between p-2 z-20']">
      
      <h1 class="text-xl lg:text-3xl font-serif tracking-wide text-left truncate flex items-center space-x-2 flex-shrink min-w-0" :title="`The Arcane Scholar’s Legacy || ${characterDetails.name}`">
        <span class="lg:hidden flex items-center space-x-2">
          <img src="/src/assets/logo.svg" alt="The Arcane Scholar's Legacy" class="h-8 w-8">
          <span class="truncate text-lg">{{ characterDetails.name }}</span>
        </span>
        <span class="hidden lg:flex items-center space-x-3">
          <img src="/src/assets/logo.svg" alt="The Arcane Scholar's Legacy" class="h-10 w-10">
          <span class="truncate">The Arcane Scholar’s Legacy || {{ characterDetails.name }}</span>
        </span>
      </h1>
      
      <div class="flex items-center justify-end ml-auto flex-shrink-0">
        <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
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

        <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 ml-2 lg:ml-4">
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
    </header>

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
      <ResearchView v-else-if="activeMenu === 'research'" :theme-classes="themeClasses" />
      <ExpeditionsView v-else-if="activeMenu === 'expeditions'" :theme-classes="themeClasses" />
      <InventoryView v-else-if="activeMenu === 'inventory'" :theme-classes="themeClasses" />
      <SkillTreeView v-else-if="activeMenu === 'skill-tree'" :theme-classes="themeClasses" />
      <ClassificationView 
        v-else-if="activeMenu === 'classification'" 
        :class="[themeClasses.primaryBg, 'h-full']"
        :theme-classes="themeClasses"
      />
    </main>

    <div v-if="showTierModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
      <div :class="[themeClasses.headerBg, 'p-8 rounded-2xl border-2 max-w-md text-center shadow-2xl transition-all scale-110', themeClasses.accentBorder]">
        <h2 class="text-3xl font-serif mb-4" :class="themeClasses.headerText">Tier Breakthrough!</h2>
        <p class="mb-6 opacity-90 text-lg" :class="themeClasses.headerText">You have mastered this tier's mysteries. Choose a permanent insight to carry forward.</p>
        
        <div class="space-y-4">
          <button 
            @click="applyTierBoost"
            :class="[themeClasses.buttonBg, themeClasses.buttonText, 'w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform']"
          >
            Arcane Efficiency (+25% Global Production)
          </button>
        </div>
      </div>
    </div>

    <nav :class="[
        themeClasses.headerBg, 
        themeClasses.accentBorder, 
        'fixed bottom-0 left-0 right-0 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto lg:bottom-4',
        'flex items-center justify-around lg:justify-center',
        'p-1 lg:p-3', 
        'space-x-0 lg:space-x-2', 
        'lg:rounded-full shadow-2xl border z-50'
      ]">
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
        <span class="text-3xl lg:text-3xl flex-shrink-0">{{ menuItem.icon }}</span>
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
import { formatLargeNumber } from '@/utils/gameUtils';

// Views
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

// --- BALANCING CONSTANTS ---
const TIER_COST_SCALE = 4;   
const TIER_POWER_SCALE = 2.2; 

// --- STATE ---
const knowledge = ref(0);
const displayedKnowledge = ref(0);
const characterDetails = ref({ name: '', faction: '', specialty: '', prestige: 0, location: '' });
const multiplierTiers = ref([]);
const activeMenu = ref('sanctum');
const saving = ref(false);
const currentTierIndex = ref(0); 
const skillPoints = ref(0); 
const tierBoosts = ref(1); 
const showTierModal = ref(false);

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- THEME LOGIC ---
const themeClasses = computed(() => {
  const { faction, specialty } = characterDetails.value;
  let theme = {
    primaryBg: 'bg-white', primaryText: 'text-black', headerBg: 'bg-gray-800',
    headerText: 'text-white', accentBorder: 'border-gray-400', sidebarBg: 'bg-gray-100',
    activeMenuBg: 'bg-blue-600', activeMenuText: 'text-white', shadowColor: 'shadow-gray-500/30',
    buttonBg: 'bg-blue-600', buttonText: 'text-white', buttonHover: 'hover:bg-blue-700',
    buttonSecondaryBg: 'bg-gray-500', buttonSecondaryText: 'text-white', buttonSecondaryHover: 'hover:bg-gray-600',
    buttonUrgentBg: 'bg-red-600', buttonUrgentText: 'text-white', buttonUrgentHover: 'hover:bg-red-700',
  };
  if (faction === 'Lumen') {
    if (specialty === 'Alchemist') {
      theme = { ...theme, headerBg: 'bg-[#13c2eb]', accentBorder: 'border-[#bd895b]', activeMenuBg: 'bg-[#fc963a]', buttonBg: 'bg-[#fc963a]', primaryText: 'text-[#7d6b5b]' };
    } else if (specialty === 'Arcane') {
      theme = { ...theme, headerBg: 'bg-[#eea221]', accentBorder: 'border-[#a78d5e]', activeMenuBg: 'bg-[#3a98fc]', buttonBg: 'bg-[#3a98fc]', primaryText: 'text-[#5b6c7d]' };
    }
  } else if (faction === 'Umbra') {
    if (specialty === 'Alchemist') {
      theme = { ...theme, primaryBg: 'bg-[#332c30]', primaryText: 'text-gray-200', headerBg: 'bg-[#55cd4a]', headerText: 'text-black', activeMenuBg: 'bg-[#b03f85]', buttonBg: 'bg-[#b03f85]' };
    } else if (specialty === 'Arcane') {
      theme = { ...theme, primaryBg: 'bg-[#2a3b29]', primaryText: 'text-gray-100', headerBg: 'bg-[#611462]', headerText: 'text-[#82fc3a]', activeMenuBg: 'bg-[#82fc3a]', buttonBg: 'bg-[#82fc3a]', buttonText: 'text-black' };
    }
  }
  return theme;
});

// --- BALANCED MULTIPLIERS ---
const prestigeMultiplier = computed(() => {
  return Math.pow(1.5, characterDetails.value.prestige);
});

const passiveKnowledgeGain = computed(() => {
  let totalGain = 0;
  multiplierTiers.value.forEach(tier => {
    if (tier.unlocked) { 
      tier.multipliers.forEach(item => {
        if (item.level > 0) {
          // Milestone Bonus Removed - Using simple exponential level scaling
          totalGain += item.baseEffect * Math.pow(item.effectMultiplier, item.level - 1);
        }
      });
    }
  });
  return totalGain * prestigeMultiplier.value * tierBoosts.value; 
});

// --- HELPER FUNCTIONS ---
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

// --- CORE GAME ACTIONS ---
const generateMultiplierTiers = () => {
  const tiers = [];
  const baseNames = getMultiplierNames(); 
  for (let i = 0; i < 20; i++) {
    const tierPower = Math.pow(TIER_POWER_SCALE, i);
    const tierCostScale = Math.pow(TIER_COST_SCALE, i);
    const maxLevel = 20 + (i * 20);
    tiers.push({
      name: `Tier ${i + 1}: ${getTierName(i)}`,
      unlocked: i === 0, 
      multipliers: baseNames.map((name, j) => ({
        level: 0,
        maxLevel: maxLevel,
        baseCost: (10 + j * 40) * tierCostScale, 
        costMultiplier: 1.07 + (i * 0.01),
        baseEffect: (0.1 + j * 0.4) * tierPower, 
        effectMultiplier: 1.10 + (i * 0.005),
        name: name
      }))
    });
  }
  return tiers;
};

const generateKnowledge = () => { knowledge.value += passiveKnowledgeGain.value || 1; };

const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = multiplierTiers.value[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  const discount = 1 + (characterDetails.value.prestige * 0.05);
  return (item.baseCost / discount) * Math.pow(item.costMultiplier, item.level);
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

const advanceToNextTier = () => {
  const currentTier = multiplierTiers.value[currentTierIndex.value];
  if (!currentTier || !currentTier.multipliers.every(m => m.level === m.maxLevel)) return;
  
  const nextTierExists = multiplierTiers.value[currentTierIndex.value + 1];
  if (!nextTierExists) {
    initiatePrestige();
  } else {
    showTierModal.value = true;
  }
};

const applyTierBoost = () => {
  tierBoosts.value *= 1.25; 
  currentTierIndex.value += 1;
  showTierModal.value = false;
  saveGameProgress();
};

const initiatePrestige = () => {
  characterDetails.value.prestige += 1;
  if (characterDetails.value.prestige % 10 === 0) {
    skillPoints.value += 1;
  }
  knowledge.value = 0;
  displayedKnowledge.value = 0;
  currentTierIndex.value = 0;
  tierBoosts.value = 1; 
  multiplierTiers.value = generateMultiplierTiers(); 
  saveGameProgress();
};

// --- DATA PERSISTENCE ---
const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const userId = auth.currentUser.uid;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${userId}/characters`, props.characterId);
  
  const privateSaveData = {
    knowledge: knowledge.value,
    prestige: characterDetails.value.prestige,
    currentTierIndex: currentTierIndex.value, 
    tierBoosts: tierBoosts.value,
    multiplierTiers: multiplierTiers.value.map(tier => ({
        unlocked: tier.unlocked,
        levels: tier.multipliers.map(m => m.level)
    })),
    skillPoints: skillPoints.value, 
    lastSaved: Timestamp.now(),
  };

  try {
    await setDoc(characterDocRef, privateSaveData, { merge: true });
    const leaderboardDocRef = doc(db, `artifacts/${appId}/public/data/leaderboard`, props.characterId);
    await setDoc(leaderboardDocRef, {
      name: characterDetails.value.name,
      prestige: characterDetails.value.prestige,
      currentTierIndex: currentTierIndex.value,
      lastUpdated: Timestamp.now(),
    }, { merge: true });
  } catch (error) {
    console.error('Error saving:', error);
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

      // 1. Load basic stats first
      characterDetails.value = { ...characterDetails.value, ...data };
      skillPoints.value = data.skillPoints || 0;
      currentTierIndex.value = data.currentTierIndex || 0;
      tierBoosts.value = data.tierBoosts || 1;

      // 2. Generate and load tier levels
      const generatedTiers = generateMultiplierTiers();
      if (data.multiplierTiers) {
        data.multiplierTiers.forEach((savedTier, i) => {
          if (generatedTiers[i]) {
            generatedTiers[i].unlocked = savedTier.unlocked;
            savedTier.levels.forEach((lvl, j) => {
              if (generatedTiers[i].multipliers[j]) {
                generatedTiers[i].multipliers[j].level = lvl;
              }
            });
          }
        });
      }
      multiplierTiers.value = generatedTiers;

      // 3. LOAD SAVED KNOWLEDGE BASE VALUE
      knowledge.value = data.knowledge || 0;

      // 4. CALCULATE IDLE TIME
      const lastSavedTimestamp = data.lastSaved;
      let idleSeconds = 0;
      if (lastSavedTimestamp) {
        const now = Timestamp.now();
        const differenceMs = now.toMillis() - lastSavedTimestamp.toMillis();
        idleSeconds = Math.max(0, Math.floor(differenceMs / 1000));
      }

      // 5. APPLY IDLE GAIN TO THE LOADED KNOWLEDGE
      // Note: passiveKnowledgeGain is computed based on the tiers we just loaded
      if (idleSeconds > 0 && passiveKnowledgeGain.value > 0) {
        const gained = passiveKnowledgeGain.value * idleSeconds;
        knowledge.value += gained;
        console.log(`Recovered ${formatLargeNumber(gained)} knowledge from idle time.`);
      }

      displayedKnowledge.value = knowledge.value;
      
    } else {
      multiplierTiers.value = generateMultiplierTiers();
    }
  } catch (error) {
    console.error('Error loading:', error);
  }
};

// --- ANIMATION & LIFECYCLE ---
let animationFrameId = null;
watch(knowledge, (newVal) => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  const animate = () => {
    const diff = newVal - displayedKnowledge.value;
    if (Math.abs(diff) < 0.1) {
      displayedKnowledge.value = newVal;
    } else {
      displayedKnowledge.value += diff / 10;
      animationFrameId = requestAnimationFrame(animate);
    }
  };
  animate();
});

const handleLogout = async () => { await saveGameProgress(); await auth.signOut(); };
const returnToCharacterSelect = async () => { await saveGameProgress(); emit('returnToCharacterSelect'); };

let knowledgeInterval = null;
onMounted(() => {
  loadGameProgress(); 
  knowledgeInterval = setInterval(() => {
    if (passiveKnowledgeGain.value > 0) knowledge.value += passiveKnowledgeGain.value;
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
.custom-scrollbar::-webkit-scrollbar { width: 10px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(150, 150, 150, 0.2); border-radius: 10px; }
</style>
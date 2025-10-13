<template>
  <div :class="[themeClasses.primaryBg, themeClasses.primaryText, 'flex flex-col h-screen w-full font-sans overflow-hidden']">
    <header :class="[themeClasses.headerBg, 'shadow-lg border-b', themeClasses.accentBorder, 'flex items-center justify-between p-4']">
      <h1 class="text-3xl font-serif text-yellow-100 tracking-wide">The Arcane Scholar’s Legacy</h1>
      <div class="flex items-center space-x-4">
        <span class="text-lg">Prestige: <span class="font-bold text-yellow-100 text-2xl">{{ characterDetails.prestige }}</span></span>
        <span class="text-lg">Skill Points: <span class="font-bold text-yellow-100 text-2xl">{{ skillPoints }}</span></span>
        <span class="text-lg">Knowledge: <span class="font-bold text-yellow-100 text-2xl">{{ displayedKnowledge.toFixed(2) }}</span></span>

        <button @click="saveGameProgress"
                :disabled="saving"
                class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
          {{ saving ? 'Saving...' : 'Save Progress' }}
        </button>

        <button @click="returnToCharacterSelect"
                class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Back to Characters
        </button>

        <button @click="handleLogout"
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Log Out
        </button>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      
      <nav :class="[themeClasses.sidebarBg, 'transition-all duration-300 p-4 border-r', themeClasses.accentBorder, 'flex flex-col space-y-3',
                    isMenuCollapsed ? 'w-20' : 'w-1/5 min-w-[180px]']">
        
        <div class="flex items-center" :class="isMenuCollapsed ? 'justify-center' : 'justify-between'">
          
          <h3 :class="['text-xl font-serif text-yellow-100 pb-2 mb-4 transition-opacity border-b', themeClasses.accentBorder,
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
                         activeMenu === menuItem.id ? [themeClasses.activeMenuBg, themeClasses.primaryText, 'shadow-inner'] : 'hover:opacity-80',
                         themeClasses.primaryText,
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

const characterDetails = ref({ name: '', faction: '', specialty: '', prestige: 0 });

const multiplierTiers = ref([]);
const activeMenu = ref('sanctum');
const saving = ref(false);
const isMenuCollapsed = ref(false); 
const currentTierIndex = ref(0); 
const skillPoints = ref(0); // <-- NEW: Track Skill Points

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- THEME LOGIC (Unchanged) ---
const themeClasses = computed(() => {
  const { faction, specialty } = characterDetails.value;
  
  let primaryBg = 'bg-gray-950';
  let primaryText = 'text-yellow-300';
  let headerBg = 'bg-violet-900';
  let accentBorder = 'border-yellow-600';
  let sidebarBg = 'bg-violet-950';
  let activeMenuBg = 'bg-green-800'; 

  if (faction === 'Lumen') {
    if (specialty === 'Arcane') {
      primaryBg = 'bg-white';
      primaryText = 'text-blue-900';
      headerBg = 'bg-amber-500';
      accentBorder = 'border-blue-500';
      sidebarBg = 'bg-blue-50';
      activeMenuBg = 'bg-blue-300';
    } else if (specialty === 'Alchemist') {
      primaryBg = 'bg-gray-50';
      primaryText = 'text-green-900';
      headerBg = 'bg-lime-600';
      accentBorder = 'border-green-700';
      sidebarBg = 'bg-lime-50';
      activeMenuBg = 'bg-lime-300';
    } else {
        primaryBg = 'bg-gray-100';
        primaryText = 'text-gray-800';
        headerBg = 'bg-amber-500';
        accentBorder = 'border-amber-700';
        sidebarBg = 'bg-amber-100';
        activeMenuBg = 'bg-amber-300';
    }
  } 
  else if (faction === 'Umbra') {
    if (specialty === 'Arcane') {
      primaryBg = 'bg-black';
      primaryText = 'text-lime-400';
      headerBg = 'bg-purple-950';
      accentBorder = 'border-lime-500';
      sidebarBg = 'bg-purple-900';
      activeMenuBg = 'bg-lime-700';
    } else if (specialty === 'Alchemist') {
      primaryBg = 'bg-red-950';
      primaryText = 'text-red-300';
      headerBg = 'bg-red-800';
      accentBorder = 'border-red-600';
      sidebarBg = 'bg-red-900';
      activeMenuBg = 'bg-red-700';
    }
  }

  return {
    primaryBg,
    primaryText,
    headerBg,
    accentBorder,
    sidebarBg,
    activeMenuBg
  };
});
// --- END THEME LOGIC ---


const toggleMenu = () => {
  isMenuCollapsed.value = !isMenuCollapsed.value;
};

// --- PRESTIGE MULTIPLIER ---
const prestigeMultiplier = computed(() => {
  // Base bonus is 0.5% (0.005) per prestige level
  return 1 + (characterDetails.value.prestige * 0.005);
});
// --- END PRESTIGE MULTIPLIER ---

// --- DYNAMIC getTierName (Unchanged) ---
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
    const tierCostScale = Math.pow(10, i);
    
    const maxLevel = 20 + (i * 20);

    tiers.push({
      name: `Tier ${i + 1}: ${getTierName(i)}`,
      unlocked: i === 0, 
      multipliers: baseNames.map((name, j) => ({
        level: 0,
        maxLevel: maxLevel,
        
        // baseCost is a stored value for scaling. Cost discount applied in getNextLevelCost.
        baseCost: (10 + j * 40) * tierCostScale, 
        costMultiplier: 1.15 + (i * 0.01),
        
        // Base Effect is boosted by the prestige multiplier.
        baseEffect: (0.1 + j * 0.4) * tierPower * currentPrestigeMultiplier, 
        effectMultiplier: 1.05 + (i * 0.005),
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

// --- Save Game Progress (Updated for skillPoints) ---
const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  
  const saveData = {
    knowledge: knowledge.value,
    prestige: characterDetails.value.prestige,
    currentTierIndex: currentTierIndex.value, 
    multiplierTiers: multiplierTiers.value.map(tier => ({
        unlocked: tier.unlocked,
        levels: tier.multipliers.map(m => m.level)
    })),
    skillPoints: skillPoints.value, // <-- NEW: Save Skill Points
    lastSaved: Timestamp.now(),
  };

  try {
    await setDoc(characterDocRef, saveData, { merge: true });
  } catch (error) {
    console.error('Error saving game progress:', error);
  } finally {
    saving.value = false;
  }
};
// --- END Save Game Progress ---

// --- Load Game Progress (Updated for skillPoints) ---
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
      
      // Load new state variables
      skillPoints.value = data.skillPoints || 0; // <-- NEW: Load Skill Points
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
.custom-scrollbar::-webkit-scrollbar-track { background: #2a0a3a; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-radius: 10px; border: 3px solid #2a0a3a; }

/* The main content area should handle its own scrolling */
main {
    height: 100%;
}
/* Scrollbar fallback styles for themed components */
.custom-scrollbar.bg-white::-webkit-scrollbar-track { background: #f0f0f0; }
.custom-scrollbar.bg-white::-webkit-scrollbar-thumb { background-color: #a07d3a; border: 3px solid #f0f0f0; }
</style>
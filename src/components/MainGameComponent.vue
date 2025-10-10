<template>
  <div class="flex flex-col h-screen w-full bg-gray-950 text-yellow-300 font-sans overflow-hidden">
    <!-- Game Header -->
    <header class="flex items-center justify-between p-4 bg-violet-900 shadow-lg border-b border-yellow-600">
      <h1 class="text-3xl font-serif text-yellow-100 tracking-wide">The Arcane Scholar’s Legacy</h1>
      <div class="flex items-center space-x-4">
        <span class="text-lg text-yellow-300">Knowledge: <span class="font-bold text-yellow-100 text-2xl">{{ displayedKnowledge.toFixed(2) }}</span></span>

        <!-- Save Progress Button -->
        <button @click="saveGameProgress"
                :disabled="saving"
                class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
          {{ saving ? 'Saving...' : 'Save Progress' }}
        </button>

        <!-- Back to Characters Button -->
        <button @click="returnToCharacterSelect"
                class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Back to Characters
        </button>

        <!-- Logout Button -->
        <button @click="handleLogout"
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Log Out
        </button>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="flex flex-1 overflow-hidden bg-gray-950">
      <!-- Sidebar / Main Menu -->
      <nav class="w-1/5 min-w-[180px] bg-violet-950 p-4 border-r border-yellow-600 flex flex-col space-y-3">
        <h3 class="text-xl font-serif text-yellow-100 mb-4 border-b border-yellow-700 pb-2">Sanctum Menu</h3>
        <button v-for="menuItem in menuItems" :key="menuItem.id"
                @click="activeMenu = menuItem.id"
                :class="['text-left px-4 py-2 rounded-lg transition duration-200 ease-in-out',
                         activeMenu === menuItem.id ? 'bg-green-800 text-yellow-500 shadow-inner' : 'hover:bg-violet-800 text-yellow-300']">
          {{ menuItem.name }}
        </button>
      </nav>

      <!-- Content Display Area -->
      <main class="flex-1 p-6 overflow-y-auto custom-scrollbar">
        <!-- MODIFIED: Pass characterDetails to SanctumView -->
        <SanctumView
          v-if="activeMenu === 'sanctum'"
          :knowledge="knowledge"
          :multiplierTiers="multiplierTiers"
          :passiveKnowledgeGain="passiveKnowledgeGain"
          :multiplierSectionTitle="multiplierSectionTitle"
          :characterDetails="characterDetails"
          @generate-knowledge="generateKnowledge"
          @buy-multiplier="buyMultiplier"
        />
        <ResearchView v-else-if="activeMenu === 'research'" />
        <ExpeditionsView v-else-if="activeMenu === 'expeditions'" />
        <InventoryView v-else-if="activeMenu === 'inventory'" />
        <SkillTreeView v-else-if="activeMenu === 'skill-tree'" />
        <ClassificationView v-else-if="activeMenu === 'classification'" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { defineProps, defineEmits } from 'vue';

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

// MODIFIED: Added name and prestige to character details
const characterDetails = ref({ name: '', faction: '', specialty: '', prestige: 0 });

const multiplierTiers = ref([]);
const activeMenu = ref('sanctum');
const saving = ref(false);

const auth = getAuth();
const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

const generateMultiplierTiers = () => {
  const tiers = [];
  const baseNames = ['Conduits', 'Scrolls', 'Crystals', 'Orbs'];
  for (let i = 0; i < 20; i++) {
    const tierPower = Math.pow(1.8, i);
    const tierCostScale = Math.pow(10, i);
    
    tiers.push({
      name: `Tier ${i + 1}: ${getTierName(i)}`,
      unlocked: i === 0,
      multipliers: baseNames.map((name, j) => ({
        level: 0,
        baseCost: (10 + j * 40) * tierCostScale,
        costMultiplier: 1.15 + (i * 0.01),
        baseEffect: (0.1 + j * 0.4) * tierPower,
        effectMultiplier: 1.05 + (i * 0.005),
        name: `Tier ${i + 1} ${name}`
      }))
    });
  }
  return tiers;
};

const getTierName = (tierIndex) => {
    const names = [
        "Novice Whispers", "Apprentice Glyphs", "Adept's Tomes", "Mystic Runes", "Etheric Weavings",
        "Celestial Charts", "Planar Bindings", "Chronomancer's Texts", "Abjurer's Wards", "Transmuter's Circles",
        "Grandmaster's Codex", "Archmage's Grimoire", "Aetheric Formulas", "Cosmic Inscriptions", "Reality Equations",
        "Void Manuscripts", "Primordial Truths", "Ascendant Doctrines", "God-Hand Schematics", "Nexus of All Knowledge"
    ];
    return names[tierIndex] || `Esoteric Tier ${tierIndex + 1}`;
}

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

const multiplierSectionTitle = computed(() => {
  const { faction, specialty } = characterDetails.value;
  if (faction === 'Lumen' && specialty === 'Arcane') return 'Radiant Concordances';
  if (faction === 'Lumen' && specialty === 'Alchemist') return 'Harmonious Concoctions';
  if (faction === 'Umbra' && specialty === 'Arcane') return 'Veiled Incantations';
  if (faction === 'Umbra' && specialty === 'Alchemist') return 'Transformative Elixirs';
  return 'Arcane Multipliers';
});

const generateKnowledge = () => { knowledge.value += 1; };

const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = multiplierTiers.value[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  return item.baseCost * Math.pow(item.costMultiplier, item.level);
};

const buyMultiplier = ({ tierIndex, multiplierIndex }) => {
  const tier = multiplierTiers.value[tierIndex];
  const item = tier?.multipliers[multiplierIndex];
  if (!item) return;

  const cost = getNextLevelCost(tierIndex, multiplierIndex);
  if (knowledge.value >= cost) {
    knowledge.value -= cost;
    item.level += 1;
    
    if (item.level === 1 && multiplierIndex === tier.multipliers.length - 1) {
        if (multiplierTiers.value[tierIndex + 1]) {
            multiplierTiers.value[tierIndex + 1].unlocked = true;
        }
    }
    saveGameProgress();
  }
};

const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  
  // MODIFIED: Include prestige level in saved data
  const saveData = {
    knowledge: knowledge.value,
    prestige: characterDetails.value.prestige,
    multiplierTiers: multiplierTiers.value.map(tier => ({
        unlocked: tier.unlocked,
        levels: tier.multipliers.map(m => m.level)
    })),
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

const loadGameProgress = async () => {
  if (!auth.currentUser || !props.characterId) return;
  const characterDocRef = doc(db, `artifacts/${appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  
  try {
    const docSnap = await getDoc(characterDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // MODIFIED: Load character name and prestige level
      characterDetails.value.name = data.name || 'Scholar';
      characterDetails.value.faction = data.faction || '';
      characterDetails.value.specialty = data.specialty || '';
      characterDetails.value.prestige = data.prestige || 0;

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
    }
  } catch (error) {
    console.error('Error loading game progress:', error);
    multiplierTiers.value = generateMultiplierTiers();
  }
};

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
  { id: 'sanctum', name: 'Sanctum / Home' },
  { id: 'research', name: 'Research' },
  { id: 'expeditions', name: 'Expeditions' },
  { id: 'inventory', name: 'Inventory' },
  { id: 'skill-tree', name: 'Skill Tree' },
  { id: 'classification', name: 'Classification' },
];
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 12px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #2a0a3a; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #a07d3a; border-radius: 10px; border: 3px solid #2a0a3a; }
</style>

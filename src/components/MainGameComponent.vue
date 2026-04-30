<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <div class="max-w-6xl mx-auto space-y-6">
      <!-- Header -->
      <header class="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h1 class="text-2xl font-bold text-gray-800">Arcane Research Hub</h1>
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-600">Character: {{ characterDetails.name }}</span>
          <button @click="returnToCharacterSelect" class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm transition">
            Switch Character
          </button>
        </div>
      </header>

      <!-- Navigation Tabs -->
      <nav class="flex flex-wrap gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
        <button 
          v-for="item in menuItems" 
          :key="item.id"
          @click="activeTab = item.id"
          :class="['px-4 py-2 rounded-md text-sm font-medium transition', activeTab === item.id ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100']"
        >
          <span class="mr-2">{{ item.icon }}</span> {{ item.name }}
        </button>
      </nav>

      <!-- Main Content Area -->
      <main>
        <SanctumView 
          v-if="activeTab === 'sanctum'"
          :themeClasses="themeClasses"
          :characterId="characterId"
          :knowledge="knowledge"
          :passiveKnowledgeGain="passiveKnowledgeGain"
          :characterDetails="characterDetails"
          :currentTierIndex="currentTierIndex"
          :saving="saving"
          @generateKnowledge="generateKnowledge"
          @saveGameProgress="saveGameProgress"
          @handleLogout="handleLogout"
          @returnToCharacterSelect="returnToCharacterSelect"
        />
        
        <div v-else class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center text-gray-500">
          <p class="text-lg">🚧 {{ menuItems.find(i => i.id === activeTab)?.name }} is under construction.</p>
          <p class="text-sm mt-2">Return to the Sanctum to manage your progress.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import SanctumView from './SanctumView.vue';

const props = defineProps({
  characterId: { type: String, required: true },
  appId: { type: String, required: true }
});

const emit = defineEmits(['returnToCharacterSelect']);

const auth = getAuth();
const db = getFirestore();

// --- STATE ---
const activeTab = ref('sanctum');
const saving = ref(false);
const knowledge = ref(0);
const displayedKnowledge = ref(0);
const prestigeMultiplier = ref(1);
const tierBoosts = ref(1);
const currentTierIndex = ref(0);
const skillPoints = ref(0);
const penaltyUntil = ref(0);

const characterDetails = ref({
  name: 'Unknown Scholar',
  faction: 'Neutral',
  specialty: 'Arcane',
  prestige: 0
});

const multiplierTiers = ref([]);

// --- THEME CONFIG ---
const themeClasses = {
  primaryText: 'text-gray-800',
  accentBorder: 'border-indigo-200',
  primaryBg: 'bg-indigo-50',
  primaryBtn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondaryBtn: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
};

// --- COMPUTED ---
const isPenaltyActive = computed(() => Date.now() < penaltyUntil.value);

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
  const penaltyMultiplier = isPenaltyActive.value ? 0.5 : 1;
  return totalGain * prestigeMultiplier.value * tierBoosts.value * penaltyMultiplier; 
});

// --- ACTIONS ---
const generateKnowledge = () => {
  knowledge.value += passiveKnowledgeGain.value || 1;
};

const saveGameProgress = async () => {
  saving.value = true;
  if (!auth.currentUser || !props.characterId) return;
  const userId = auth.currentUser.uid;
  const characterDocRef = doc(db, `artifacts/${props.appId}/users/${userId}/characters`, props.characterId);
  
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
    const leaderboardDocRef = doc(db, `artifacts/${props.appId}/public/data/leaderboard`, props.characterId);
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
  const characterDocRef = doc(db, `artifacts/${props.appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
  try {
    const docSnap = await getDoc(characterDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      characterDetails.value = { ...characterDetails.value, ...data };
      skillPoints.value = data.skillPoints || 0;
      currentTierIndex.value = data.currentTierIndex || 0;
      tierBoosts.value = data.tierBoosts || 1;

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
      knowledge.value = data.knowledge || 0;

      const lastSavedTimestamp = data.lastSaved;
      let idleSeconds = 0;
      if (lastSavedTimestamp) {
        const now = Timestamp.now();
        const differenceMs = now.toMillis() - lastSavedTimestamp.toMillis();
        idleSeconds = Math.max(0, Math.floor(differenceMs / 1000));
      }

      if (idleSeconds > 0 && passiveKnowledgeGain.value > 0) {
        const gained = passiveKnowledgeGain.value * idleSeconds;
        knowledge.value += gained;
      }

      displayedKnowledge.value = knowledge.value;
    } else {
      multiplierTiers.value = generateMultiplierTiers();
    }
  } catch (error) {
    console.error('Error loading:', error);
  }
};

const handleAutoclickerBan = async () => {
  if (!auth.currentUser || !props.characterId) return;
  try {
    const characterDocRef = doc(db, `artifacts/${props.appId}/users/${auth.currentUser.uid}/characters`, props.characterId);
    await deleteDoc(characterDocRef);
    localStorage.removeItem('autoclicker_penalty_until');
    localStorage.removeItem('autoclicker_attempts');
    alert('Your character has been permanently deleted due to repeated autoclicker usage.');
    window.location.reload();
  } catch (e) {
    console.error('Failed to delete character:', e);
  }
};

// --- HELPERS & GENERATORS ---
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

const generateMultiplierTiers = () => {
  const tiers = [];
  const baseNames = getMultiplierNames(); 
  const TIER_POWER_SCALE = 1.5;
  const TIER_COST_SCALE = 2.5;
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

// --- LIFECYCLE ---
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

let knowledgeInterval = null;
onMounted(() => {
  loadGameProgress();
  
  const savedPenalty = localStorage.getItem('autoclicker_penalty_until');
  if (savedPenalty) penaltyUntil.value = parseInt(savedPenalty, 10);
  
  window.addEventListener('autoclicker-ban', handleAutoclickerBan);
  
  knowledgeInterval = setInterval(() => {
    if (passiveKnowledgeGain.value > 0) knowledge.value += passiveKnowledgeGain.value;
  }, 1000);
});

onUnmounted(async () => {
  if (knowledgeInterval) clearInterval(knowledgeInterval);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  window.removeEventListener('autoclicker-ban', handleAutoclickerBan);
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

<template>
  <section :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder, props.themeClasses.primaryBg, 'p-6 rounded-lg shadow-xl border']">
    
    <div class="flex flex-wrap border-b mb-6" :class="props.themeClasses.accentBorder">
      <button 
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'py-2 px-4 text-lg font-semibold transition-colors duration-200',
          activeTab === tab.id 
            ? ['border-b-4', props.themeClasses.activeMenuBg, props.themeClasses.activeMenuText] // Active tab styles
            : [props.themeClasses.primaryText, 'opacity-70 hover:opacity-100 hover:border-b-2', props.themeClasses.accentBorder] // Inactive tab styles
        ]"
      >
        {{ tab.name }}
      </button>
    </div>

    <div v-show="activeTab === 'generator'">
      <h2 class="text-3xl font-serif mb-6 pb-2 border-b" 
            :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder]">
            Primary Resource Generator
        </h2>
      
      <div class="flex flex-col items-center justify-center space-y-6 mt-8">
        <span class="text-4xl sm:text-5xl font-bold mb-4" :class="props.themeClasses.primaryText">
          Current Knowledge: {{ formatLargeNumber(knowledge) }}
        </span>
        
        <button @click="emit('generate-knowledge')"
                :class="[props.themeClasses.activeMenuBg, 'text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80']">
          Generate Knowledge
        </button>
        
        <p class="text-sm mt-2" :class="props.themeClasses.primaryText">Click to harness raw arcane energy and convert it into Knowledge.</p>
        
        <p class="text-xl mt-4" :class="props.themeClasses.primaryText">
          Passive Knowledge Gain: <span class="font-bold">{{ formatLargeNumber(passiveKnowledgeGain) }}</span> / second
        </p>
      </div>

      <div class="mt-10 pt-6 border-t" :class="props.themeClasses.accentBorder">
        
        <div v-if="activeTier">
          <h4 class="text-3xl font-serif mb-6 text-center" :class="[props.themeClasses.primaryText]">
            {{ activeTier.name }}
          </h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div v-for="(item, multiplierIndex) in activeTier.multipliers" :key="`multiplier-${props.currentTierIndex}-${multiplierIndex}`"
                 class="p-4 rounded-lg border shadow-md flex flex-col"
                 :class="[props.themeClasses.primaryBg, props.themeClasses.accentBorder]">
              
              <h4 class="text-xl mb-2" :class="props.themeClasses.primaryText">
                  {{ item.name }} (Level {{ item.level }} / {{ item.maxLevel }})
              </h4>
              
              <p class="text-sm mb-2" :class="props.themeClasses.primaryText">
                Current effect: +{{ formatLargeNumber(item.baseEffect * Math.pow(item.effectMultiplier, item.level > 0 ? item.level - 1 : 0)) }} knowledge/s
                <span v-if="item.level > 0 && item.level < item.maxLevel">(Next: +{{ formatLargeNumber(item.baseEffect * Math.pow(item.effectMultiplier, item.level)) }} knowledge/s)</span>
              </p>
              
              <p class="text-sm mb-4" :class="props.themeClasses.primaryText">
                Cost for next level ({{ item.level + 1 }}): 
                <span class="font-bold" :class="props.themeClasses.primaryText">{{ formatLargeNumber(getNextLevelCost(props.currentTierIndex, multiplierIndex)) }} Knowledge</span>
              </p>
              
              <template v-if="item.level < item.maxLevel">
                <button @click="emit('buy-multiplier', { tierIndex: props.currentTierIndex, multiplierIndex })"
                        :disabled="knowledge < getNextLevelCost(props.currentTierIndex, multiplierIndex)"
                        :class="[props.themeClasses.activeMenuBg, 'mt-auto text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out', knowledge < getNextLevelCost(props.currentTierIndex, multiplierIndex) ? 'opacity-50 cursor-not-allowed' : '']">
                  Buy Upgrade (Level {{ item.level + 1 }})
                </button>
              </template>
              <template v-else>
                <div class="mt-auto text-center py-2 rounded-md font-bold text-base shadow-inner"
                     :class="[props.themeClasses.activeMenuBg, props.themeClasses.primaryText, 'bg-opacity-80']">
                  Max Level Reached ✅
                </div>
              </template>
              
            </div>
          </div>
          
          <div v-if="canAdvanceTier" class="mt-8 text-center">
              <button @click="emit('advance-tier')"
                      :class="['py-3 px-6 rounded-lg text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105', 
                                props.themeClasses.activeMenuBg, props.themeClasses.primaryText]">
                  Go to Next Tier: {{ props.multiplierTiers[props.currentTierIndex + 1].name }} →
              </button>
          </div>
          </div>
        
        <div v-else class="text-center p-4 rounded-lg border border-dashed" :class="[props.themeClasses.sidebarBg, props.themeClasses.accentBorder, props.themeClasses.primaryText]">
            <p class="italic">Loading Arcane Data...</p>
        </div>
      </div>
    </div>

    <div v-show="activeTab === 'character'">
      <h2 class="text-3xl font-serif mb-6 pb-2 border-b" 
            :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder]">
            Character Overview
        </h2>
      
      <div class="flex items-start space-x-6">
        <div class="flex flex-col items-center w-28 flex-shrink-0">
            <div class="w-24 h-24 sm:w-28 sm:h-28 border-2 rounded-lg shadow-inner flex items-center justify-center"
                 :class="[props.themeClasses.primaryBg, props.themeClasses.accentBorder]">
                <span :class="[props.themeClasses.primaryText, 'text-sm italic opacity-70']">Avatar</span>
            </div>
            <h3 class="mt-2 text-lg font-bold text-center truncate w-full" 
                :class="props.themeClasses.primaryText" 
                :title="characterDetails.name">{{ characterDetails.name }}</h3>
            <p class="text-sm" :class="props.themeClasses.primaryText">Prestige: {{ characterDetails.prestige }}</p>
        </div>
        
        <div class="flex-grow">
          <p class="text-lg" :class="props.themeClasses.primaryText">
            Welcome back, Scholar. The whispers of ancient knowledge await your command.
          </p>
          <div class="mt-4 p-4 rounded-lg border" :class="props.themeClasses.accentBorder">
            <h4 class="text-xl font-bold mb-2" :class="props.themeClasses.primaryText">Character Stats</h4>
            <p :class="props.themeClasses.primaryText">Faction: <span class="font-semibold">{{ characterDetails.faction || 'N/A' }}</span></p>
            <p :class="props.themeClasses.primaryText">Specialty: <span class="font-semibold">{{ characterDetails.specialty || 'N/A' }}</span></p>
            <p :class="props.themeClasses.primaryText">Location: <span class="font-semibold">{{ characterDetails.location || 'Sanctum' }}</span></p>
          </div>
        </div>
      </div>
    </div>

    <div v-show="activeTab === 'achievements'">
      <h2 class="text-3xl font-serif mb-6 pb-2 border-b" 
            :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder]">
            Achievements
        </h2>
      <AchievementsSection :theme-classes="props.themeClasses" />
    </div>

  </section>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue';
import AchievementsSection from './AchievementsSection.vue';

const props = defineProps({
  knowledge: { type: Number, required: true },
  passiveKnowledgeGain: { type: Number, required: true },
  multiplierTiers: { type: Array, required: true },
  characterDetails: { type: Object, required: true },
  currentTierIndex: { type: Number, required: true }, 
  themeClasses: { 
    type: Object, 
    required: true,
    default: () => ({ 
      primaryBg: 'bg-gray-950',
      primaryText: 'text-yellow-300', 
      accentBorder: 'border-yellow-600',
      sidebarBg: 'bg-violet-950',
      activeMenuBg: 'bg-green-800',
      activeMenuText: 'text-white' // Added for tabs
    })
  }
});

const emit = defineEmits(['generate-knowledge', 'buy-multiplier', 'advance-tier']); 

// *** NEW: Active Tab State and Tab Definitions ***
const activeTab = ref('generator'); // Default to the generator
const tabs = [
  { id: 'generator', name: 'Primary Resource Generator' },
  { id: 'character', name: 'Character Overview' },
  { id: 'achievements', name: 'Achievements' },
];

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
// --- END UTILITY ---

// Computed property to get the currently active tier object
const activeTier = computed(() => {
    return props.multiplierTiers[props.currentTierIndex];
});

// Computed property to determine if the "Go to Next Tier" button should show
const canAdvanceTier = computed(() => {
    const currentTier = activeTier.value;
    if (!currentTier) return false;
    
    const allMaxed = currentTier.multipliers.every(m => m.level === m.maxLevel);
    const nextTierExists = props.multiplierTiers[props.currentTierIndex + 1];

    return allMaxed && nextTierExists;
});

const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = props.multiplierTiers[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  return item.baseCost * Math.pow(item.costMultiplier, item.level);
};
</script>

<style scoped>
/* Scoped styles remain minimal */
</style>
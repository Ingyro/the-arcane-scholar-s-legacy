<template>
  <!-- The main section tag now wraps everything, including achievements -->
  <section :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder, props.themeClasses.primaryBg, 'p-6 rounded-lg shadow-xl border']">
    
    <!-- CHARACTER BIO & SANCTUM OVERVIEW (Existing Content) -->
    <div class="flex items-start space-x-6 mb-4">
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
        <h2 class="text-3xl font-serif mb-2 pb-2 border-b" 
            :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder]">
            Sanctum Overview
        </h2>
        <p class="text-lg" :class="props.themeClasses.primaryText">
          Welcome back, Scholar. The whispers of ancient knowledge await your command.
        </p>
      </div>
    </div>

    <!-- KNOWLEDGE GENERATION (Existing Content) -->
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

    <!-- MULTIPLIER TIERS (Existing Content) -->
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

    <!-- 
      *** NEW ACHIEVEMENTS SECTION ***
      The new component is added here, at the bottom of the Sanctum view.
      It receives the themeClasses prop to style itself correctly.
    -->
    <AchievementsSection :theme-classes="props.themeClasses" />

  </section>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
// *** IMPORT THE NEW COMPONENT ***
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
      activeMenuBg: 'bg-green-800'
    })
  }
});

const emit = defineEmits(['generate-knowledge', 'buy-multiplier', 'advance-tier']); 

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
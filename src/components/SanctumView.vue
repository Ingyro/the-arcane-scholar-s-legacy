<template>
  <section class="bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700">
    <!-- MODIFIED: Header layout updated -->
    <div class="flex items-start space-x-6 mb-4">
      <!-- NEW: Container for Avatar and character details -->
      <div class="flex flex-col items-center w-28 flex-shrink-0">
          <!-- Avatar Placeholder -->
          <div class="w-24 h-24 sm:w-28 sm:h-28 bg-gray-950 border-2 border-yellow-700 rounded-lg shadow-inner flex items-center justify-center">
              <span class="text-yellow-500 text-sm italic">Avatar</span>
          </div>
          <!-- NEW: Character Name -->
          <h3 class="mt-2 text-lg font-bold text-yellow-100 text-center truncate w-full" :title="characterDetails.name">{{ characterDetails.name }}</h3>
          <!-- NEW: Prestige Level -->
          <p class="text-sm text-yellow-400">Prestige: {{ characterDetails.prestige }}</p>
      </div>
      
      <!-- Welcome Text -->
      <div class="flex-grow">
        <h2 class="text-3xl font-serif text-yellow-100 mb-2 border-b border-yellow-600 pb-2">Sanctum Overview</h2>
        <p class="text-lg text-yellow-300">
          Welcome back, Scholar. The whispers of ancient knowledge await your command.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-y-6 mt-8">
      <span class="text-4xl sm:text-5xl font-bold text-yellow-100 mb-4">
        Current Knowledge: {{ knowledge.toFixed(2) }}
      </span>
      <button @click="emit('generate-knowledge')"
              class="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Generate Knowledge
      </button>
      <p class="text-sm text-yellow-400 mt-2">Click to harness raw arcane energy and convert it into Knowledge.</p>
      <p class="text-xl text-yellow-200 mt-4">Passive Knowledge Gain: <span class="font-bold">{{ passiveKnowledgeGain.toFixed(2) }}</span> / second</p>
    </div>

    <div class="mt-10 pt-6 border-t border-yellow-700">
      <h3 class="text-2xl font-serif text-yellow-100 mb-4">{{ multiplierSectionTitle }}</h3>
      
      <div v-for="(tier, tierIndex) in multiplierTiers" :key="`tier-${tierIndex}`" class="mb-8">
        <div v-if="tier.unlocked">
          <h4 class="text-xl font-serif text-yellow-200 mb-4 border-b border-yellow-800 pb-1">{{ tier.name }}</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div v-for="(item, multiplierIndex) in tier.multipliers" :key="`multiplier-${tierIndex}-${multiplierIndex}`"
                 class="bg-violet-700 p-4 rounded-lg border border-yellow-800 shadow-md flex flex-col">
              <h4 class="text-xl text-yellow-200 mb-2">{{ item.name }} (Level {{ item.level }})</h4>
              <p class="text-yellow-400 text-sm mb-2">
                Current effect: +{{ (item.baseEffect * Math.pow(item.effectMultiplier, item.level > 0 ? item.level - 1 : 0)).toFixed(2) }} knowledge/s
                <span v-if="item.level > 0">(Next: +{{ (item.baseEffect * Math.pow(item.effectMultiplier, item.level)).toFixed(2) }} knowledge/s)</span>
              </p>
              <p class="text-yellow-400 text-sm mb-4">
                Cost for next level ({{ item.level + 1 }}): <span class="font-bold text-yellow-100">{{ getNextLevelCost(tierIndex, multiplierIndex).toFixed(2) }} Knowledge</span>
              </p>
              <button @click="emit('buy-multiplier', { tierIndex, multiplierIndex })"
                      :disabled="knowledge < getNextLevelCost(tierIndex, multiplierIndex)"
                      :class="['mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out',
                               knowledge < getNextLevelCost(tierIndex, multiplierIndex) ? 'opacity-50 cursor-not-allowed' : '']">
                Buy Upgrade (Level {{ item.level + 1 }})
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center bg-violet-900 p-4 rounded-lg border border-dashed border-yellow-800">
            <p class="text-yellow-500 italic">Unlock the final multiplier of the previous tier to reveal {{ tier.name }}.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// MODIFIED: Added characterDetails to props
const props = defineProps({
  knowledge: { type: Number, required: true },
  passiveKnowledgeGain: { type: Number, required: true },
  multiplierTiers: { type: Array, required: true },
  multiplierSectionTitle: { type: String, required: true },
  characterDetails: { type: Object, required: true }
});

const emit = defineEmits(['generate-knowledge', 'buy-multiplier']);

const getNextLevelCost = (tierIndex, multiplierIndex) => {
  const item = props.multiplierTiers[tierIndex]?.multipliers[multiplierIndex];
  if (!item) return Infinity;
  return item.baseCost * Math.pow(item.costMultiplier, item.level);
};
</script>

<style scoped>
/* Add any specific styles for SanctumView here if needed */
</style>

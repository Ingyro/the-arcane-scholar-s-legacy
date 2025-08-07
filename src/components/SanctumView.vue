<template>
  <section class="bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700">
    <h2 class="text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3">Sanctum Overview</h2>
    <p class="text-lg text-yellow-300 mb-4">
      Welcome back, Scholar. The whispers of ancient knowledge await your command.
      Your current reserves of Knowledge are vital for your arcane pursuits.
    </p>

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
      <h3 class="text-2xl font-serif text-yellow-100 mb-4">Arcane Multipliers</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div v-for="(item, key) in multiplierItems" :key="key"
             class="bg-violet-700 p-4 rounded-lg border border-yellow-800 shadow-md flex flex-col">
          <h4 class="text-xl text-yellow-200 mb-2">{{ item.name }} (Level {{ item.level }})</h4>
          <p class="text-yellow-400 text-sm mb-2">
            Current effect: +{{ (item.baseEffect * Math.pow(item.effectMultiplier, item.level > 0 ? item.level - 1 : 0)).toFixed(2) }} knowledge/s
            <span v-if="item.level > 0">(Next: +{{ (item.baseEffect * Math.pow(item.effectMultiplier, item.level)).toFixed(2) }} knowledge/s)</span>
          </p>
          <p class="text-yellow-400 text-sm mb-4">
            Cost for next level ({{ item.level + 1 }}): <span class="font-bold text-yellow-100">{{ getNextLevelCost(key).toFixed(2) }} Knowledge</span>
          </p>
          <button @click="emit('buy-multiplier', key)"
                  :disabled="knowledge < getNextLevelCost(key)"
                  :class="['mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out',
                           knowledge < getNextLevelCost(key) ? 'opacity-50 cursor-not-allowed' : '']">
            Buy {{ item.name }} (Level {{ item.level + 1 }})
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props expected by this component
const props = defineProps({
  knowledge: {
    type: Number,
    required: true
  },
  multiplierItems: {
    type: Object,
    required: true
  },
  passiveKnowledgeGain: {
    type: Number,
    required: true
  }
});

// Define events this component can emit
const emit = defineEmits(['generate-knowledge', 'buy-multiplier']);

console.log('SanctumView: Component loaded.');

// Helper function to calculate the cost for the next level of a multiplier item
const getNextLevelCost = (itemKey) => {
  const item = props.multiplierItems[itemKey];
  if (!item) return Infinity;
  return item.baseCost * Math.pow(item.costMultiplier, item.level);
};
</script>

<style scoped>
/* Add any specific styles for SanctumView here if needed */
</style>

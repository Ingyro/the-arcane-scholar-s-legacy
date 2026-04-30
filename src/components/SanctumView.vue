<template>
  <section ref="sanctumContainer" :class="[props.themeClasses.primaryText, props.themeClasses.accentBorder, props.themeClasses.primaryBg, 'p-6 rounded-lg shadow-xl border']">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Left Column: Stats & Generation -->
      <div class="w-full md:w-1/2 space-y-6">
        <div class="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 class="text-xl font-bold mb-2 flex items-center gap-2">
            <span class="text-2xl">📊</span> Current Status
          </h2>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-500">Knowledge</p>
              <p class="font-mono font-bold text-lg">{{ formatLargeNumber(knowledge) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Passive Gain</p>
              <p class="font-mono font-bold text-lg text-green-600">+{{ formatLargeNumber(passiveKnowledgeGain) }}/s</p>
            </div>
            <div>
              <p class="text-gray-500">Prestige</p>
              <p class="font-bold">{{ characterDetails.prestige }}</p>
            </div>
            <div>
              <p class="text-gray-500">Current Tier</p>
              <p class="font-bold">{{ currentTierIndex + 1 }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="text-2xl">⚡</span> Active Generation
          </h2>
          <button 
            @click="generateKnowledge"
            :class="[props.themeClasses.primaryBtn, 'w-full py-4 text-lg font-bold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed']"
            :disabled="saving"
          >
            {{ saving ? 'Saving...' : 'Generate Knowledge' }}
          </button>
          <p class="text-xs text-gray-500 mt-2 text-center">Click to manually generate resources</p>
        </div>

        <div class="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 class="text-xl font-bold mb-2 flex items-center gap-2">
            <span class="text-2xl">🛡️</span> Account Management
          </h2>
          <div class="flex flex-col gap-2">
            <button @click="saveGameProgress" :class="[props.themeClasses.secondaryBtn, 'w-full py-2 rounded']" :disabled="saving">
              {{ saving ? 'Saving...' : 'Save Progress' }}
            </button>
            <button @click="handleLogout" :class="[props.themeClasses.secondaryBtn, 'w-full py-2 rounded']">
              Logout
            </button>
            <button @click="returnToCharacterSelect" :class="[props.themeClasses.secondaryBtn, 'w-full py-2 rounded']">
              Return to Character Select
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: Achievements & Info -->
      <div class="w-full md:w-1/2">
        <AchievementsSection 
          :themeClasses="props.themeClasses" 
          :characterId="props.characterId" 
          :knowledge="knowledge" 
          :prestige="characterDetails.prestige"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref, onMounted, onUnmounted } from 'vue';
import AchievementsSection from './AchievementsSection.vue';
import { formatLargeNumber, AutoclickerDetector } from '@/utils/gameUtils';

const props = defineProps({
  themeClasses: {
    type: Object,
    required: true
  },
  characterId: {
    type: String,
    required: true
  },
  knowledge: {
    type: Number,
    required: true
  },
  passiveKnowledgeGain: {
    type: Number,
    required: true
  },
  characterDetails: {
    type: Object,
    required: true
  },
  currentTierIndex: {
    type: Number,
    required: true
  },
  saving: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['generateKnowledge', 'saveGameProgress', 'handleLogout', 'returnToCharacterSelect']);

const sanctumContainer = ref(null);
let detector = null;

onMounted(() => {
  if (sanctumContainer.value) {
    detector = new AutoclickerDetector({ 
      maxClicksPerSecond: 15, 
      targetElement: sanctumContainer.value 
    });
    detector.start();
  }
});

onUnmounted(() => {
  if (detector) detector.stop();
});

const generateKnowledge = () => emit('generateKnowledge');
const saveGameProgress = () => emit('saveGameProgress');
const handleLogout = () => emit('handleLogout');
const returnToCharacterSelect = () => emit('returnToCharacterSelect');
</script>

<style scoped>
/* Scoped styles if needed */
</style>

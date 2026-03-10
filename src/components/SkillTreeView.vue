<template>
  <section :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder, 'p-6 rounded-lg shadow-xl border']">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-3xl font-serif" :class="themeClasses.primaryText">Skill Tree</h2>
      <div class="text-sm flex items-center space-x-3">
        <div :class="themeClasses.primaryText">Points: <strong class="ml-1">{{ skillPoints }}</strong></div>
        <button @click="resetTree" class="px-3 py-1 rounded bg-red-700 hover:bg-red-600 text-white text-sm">Reset</button>
      </div>
    </div>
    
    <p class="text-lg mb-4" :class="themeClasses.primaryText">Forge your destiny by mastering powerful skills and abilities.</p>
    
    <div class="grid grid-cols-3 gap-6">
      <div v-for="skill in skills" :key="skill.id" class="relative">
        <div
          class="p-4 rounded-lg border shadow-sm cursor-pointer transition-transform transform hover:scale-105"
          :class="nodeClasses(skill)">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-semibold">{{ skill.name }}</div>
              <div class="text-xs opacity-80">Cost: {{ skill.cost }}</div>
            </div>
            <div>
              <button v-if="!isUnlocked(skill.id) && canUnlock(skill.id)" @click.stop="invest(skill)" class="px-2 py-1 bg-green-700 text-white rounded text-sm">Invest</button>
              <span v-else-if="isUnlocked(skill.id)" class="px-2 py-1 bg-yellow-600 text-black rounded text-sm">Unlocked</span>
              <span v-else class="px-2 py-1 bg-gray-700 text-white rounded text-sm">Locked</span>
            </div>
          </div>
          <div class="mt-3 text-sm opacity-90">{{ skill.desc }}</div>
          <div class="mt-2 text-xs opacity-70">Deps: <span v-if="skill.deps.length===0">—</span><span v-else>{{ skill.deps.join(', ') }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
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

const { themeClasses } = props;

const skillPoints = ref(5);

const skills = ref([
  { id: 'A1', name: 'Basic Arcana', cost: 1, desc: 'Fundamental arcane theory.', deps: [] },
  { id: 'A2', name: 'Mana Manipulation', cost: 2, desc: 'Control and shape mana.', deps: ['A1'] },
  { id: 'A3', name: 'Spellweaving', cost: 3, desc: 'Combine motes into spells.', deps: ['A2'] },
  { id: 'B1', name: 'Herbalism', cost: 1, desc: 'Identify common reagents.', deps: [] },
  { id: 'B2', name: 'Alchemy', cost: 2, desc: 'Basic potion brewing.', deps: ['B1'] },
  { id: 'C1', name: 'Ritual Mastery', cost: 5, desc: 'Perform complex rituals.', deps: ['A3','B2'] }
]);

const unlocked = ref(new Set());

const isUnlocked = (id) => unlocked.value.has(id);

const canUnlock = (id) => {
  if (isUnlocked(id)) return false;
  const skill = skills.value.find(s => s.id === id);
  if (!skill) return false;
  const depsMet = skill.deps.every(d => unlocked.value.has(d));
  return depsMet && skillPoints.value >= skill.cost;
};

function invest(skill) {
  if (!canUnlock(skill.id)) return;
  skillPoints.value -= skill.cost;
  unlocked.value.add(skill.id);
}

function resetTree() {
  let refunded = 0;
  unlocked.value.forEach(id => {
    const s = skills.value.find(x => x.id === id);
    if (s) refunded += s.cost;
  });
  skillPoints.value += refunded;
  unlocked.value = new Set();
}

function nodeClasses(skill) {
  if (isUnlocked(skill.id)) return `${themeClasses.activeMenuBg} text-black border-yellow-400`;
  if (canUnlock(skill.id)) return `border-green-600 ${themeClasses.primaryText}`;
  return `border-gray-700 ${themeClasses.primaryText}`;
}

console.log('SkillTreeView: Component loaded.');
</script>

<style scoped>
/* Add any specific styles for SkillTreeView here if needed */
</style>
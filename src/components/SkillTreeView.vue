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
    
    <div class="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <!-- Trunk Skills -->
      <div class="flex items-center space-x-4 mb-4 md:mb-0">
        <div v-for="skill in trunkSkills" :key="skill.id" class="relative">
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
            <div class="mt-2 flex items-center space-x-1">
              <div v-for="i in skill.slots" :key="i" :class="['w-3 h-3 rounded-full', skill.pointsAllocated >= i ? 'bg-green-700' : 'bg-gray-400']"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Branch Skills -->
      <div v-if="showBranches" class="flex items-center space-x-4 mb-4 md:mb-0">
        <div v-for="skill in branchSkills" :key="skill.id" class="relative">
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
            <div class="mt-2 flex items-center space-x-1">
              <div v-for="i in skill.slots" :key="i" :class="['w-3 h-3 rounded-full', skill.pointsAllocated >= i ? 'bg-green-700' : 'bg-gray-400']"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Crown Skill -->
      <div v-if="showCrown" class="relative mb-4 md:mb-0">
        <div
          class="p-4 rounded-lg border shadow-sm cursor-pointer transition-transform transform hover:scale-105"
          :class="nodeClasses(crownSkill)">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-semibold">{{ crownSkill.name }}</div>
              <div class="text-xs opacity-80">Cost: {{ crownSkill.cost }}</div>
            </div>
            <div>
              <button v-if="!isUnlocked(crownSkill.id) && canUnlock(crownSkill.id)" @click.stop="invest(crownSkill)" class="px-2 py-1 bg-green-700 text-white rounded text-sm">Invest</button>
              <span v-else-if="isUnlocked(crownSkill.id)" class="px-2 py-1 bg-yellow-600 text-black rounded text-sm">Unlocked</span>
              <span v-else class="px-2 py-1 bg-gray-700 text-white rounded text-sm">Locked</span>
            </div>
          </div>
          <div class="mt-3 text-sm opacity-90">{{ crownSkill.desc }}</div>
          <div class="mt-2 text-xs opacity-70">Deps: <span v-if="crownSkill.deps.length===0">—</span><span v-else>{{ crownSkill.deps.join(', ') }}</span></div>
          <div class="mt-2 flex items-center space-x-1">
            <div v-for="i in crownSkill.slots" :key="i" :class="['w-3 h-3 rounded-full', crownSkill.pointsAllocated >= i ? 'bg-green-700' : 'bg-gray-400']"></div>
          </div>
        </div>
      </div>
      
      <!-- Hidden Path Skill -->
      <div v-if="showHiddenPath" class="relative">
        <div
          class="p-4 rounded-lg border shadow-sm cursor-pointer transition-transform transform hover:scale-105"
          :class="nodeClasses(hiddenPathSkill)">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-semibold">{{ hiddenPathSkill.name }}</div>
              <div class="text-xs opacity-80">Cost: {{ hiddenPathSkill.cost }}</div>
            </div>
            <div>
              <button v-if="!isUnlocked(hiddenPathSkill.id) && canUnlock(hiddenPathSkill.id)" @click.stop="invest(hiddenPathSkill)" class="px-2 py-1 bg-green-700 text-white rounded text-sm">Invest</button>
              <span v-else-if="isUnlocked(hiddenPathSkill.id)" class="px-2 py-1 bg-yellow-600 text-black rounded text-sm">Unlocked</span>
              <span v-else class="px-2 py-1 bg-gray-700 text-white rounded text-sm">Locked</span>
            </div>
          </div>
          <div class="mt-3 text-sm opacity-90">{{ hiddenPathSkill.desc }}</div>
          <div class="mt-2 text-xs opacity-70">Deps: <span v-if="hiddenPathSkill.deps.length===0">—</span><span v-else>{{ hiddenPathSkill.deps.join(', ') }}</span></div>
          <div class="mt-2 flex items-center space-x-1">
            <div v-for="i in hiddenPathSkill.slots" :key="i" :class="['w-3 h-3 rounded-full', hiddenPathSkill.pointsAllocated >= i ? 'bg-green-700' : 'bg-gray-400']"></div>
          </div>
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
  { id: 'T1', name: 'Trunk Skill 1', cost: 1, desc: 'First trunk skill.', deps: [], slots: 3, pointsAllocated: 0 },
  { id: 'T2', name: 'Trunk Skill 2', cost: 1, desc: 'Second trunk skill.', deps: [], slots: 3, pointsAllocated: 0 },
  { id: 'B1', name: 'Branch Skill 1', cost: 2, desc: 'First branch skill.', deps: ['T1', 'T2'], slots: 2, pointsAllocated: 0 },
  { id: 'B2', name: 'Branch Skill 2', cost: 2, desc: 'Second branch skill.', deps: ['T1', 'T2'], slots: 2, pointsAllocated: 0 },
  { id: 'B3', name: 'Branch Skill 3', cost: 2, desc: 'Third branch skill.', deps: ['T1', 'T2'], slots: 2, pointsAllocated: 0 },
  { id: 'B4', name: 'Branch Skill 4', cost: 2, desc: 'Fourth branch skill.', deps: ['T1', 'T2'], slots: 2, pointsAllocated: 0 },
  { id: 'B5', name: 'Branch Skill 5', cost: 2, desc: 'Fifth branch skill.', deps: ['T1', 'T2'], slots: 2, pointsAllocated: 0 },
  { id: 'C1', name: 'Crown Skill', cost: 5, desc: 'Crown skill.', deps: ['B1', 'B2', 'B3', 'B4', 'B5'], slots: 5, pointsAllocated: 0 },
  { id: 'H1', name: 'Hidden Path Skill', cost: 5, desc: 'Hidden path skill.', deps: ['C1'], slots: 3, pointsAllocated: 0 }
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
  if (skill.pointsAllocated < skill.slots) {
    skillPoints.value -= skill.cost;
    skill.pointsAllocated += 1;
  }
}

function resetTree() {
  let refunded = 0;
  unlocked.value.forEach(id => {
    const s = skills.value.find(x => x.id === id);
    if (s) refunded += s.cost;
  });
  skillPoints.value += refunded;
  unlocked.value = new Set();
  skills.value.forEach(skill => skill.pointsAllocated = 0);
}

function nodeClasses(skill) {
  if (isUnlocked(skill.id)) return `${themeClasses.activeMenuBg} text-black border-yellow-400`;
  if (canUnlock(skill.id)) return `border-green-600 ${themeClasses.primaryText}`;
  return `border-gray-700 ${themeClasses.primaryText}`;
}

const trunkSkills = computed(() => skills.value.filter(skill => skill.id.startsWith('T')));
const branchSkills = computed(() => skills.value.filter(skill => skill.id.startsWith('B')));
const crownSkill = computed(() => skills.value.find(skill => skill.id === 'C1'));
const hiddenPathSkill = computed(() => skills.value.find(skill => skill.id === 'H1'));

const showBranches = computed(() => {
  const trunkPointsSpent = trunkSkills.value.reduce((sum, skill) => sum + (isUnlocked(skill.id) ? skill.cost : 0), 0);
  return trunkPointsSpent >= 6;
});

const showCrown = computed(() => {
  const branchPointsSpent = branchSkills.value.reduce((sum, skill) => sum + (isUnlocked(skill.id) ? skill.cost : 0), 0);
  return branchPointsSpent >= 12;
});

const showHiddenPath = computed(() => isUnlocked(crownSkill.value.id));

console.log('SkillTreeView: Component loaded.');
</script>

<style scoped>
/* Add any specific styles for SkillTreeView here if needed */
</style>

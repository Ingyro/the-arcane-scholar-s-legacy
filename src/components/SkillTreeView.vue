<template>
  <section :class="[themeClasses.primaryBg, themeClasses.primaryText, themeClasses.accentBorder, 'p-6 rounded-lg shadow-xl border']">
    
    <h2 class="text-3xl font-serif mb-6 border-b pb-3" 
        :class="[themeClasses.primaryText, themeClasses.accentBorder]">
        Skill Tree
    </h2>
    
    <p class="text-lg" :class="themeClasses.primaryText">
      Forge your destiny by mastering powerful skills and abilities.
    </p>
    
    <p class="text-sm mt-4" :class="themeClasses.primaryText">Invest your hard-earned skill points to unlock new capabilities and enhance existing ones.</p>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

// NEW PROP: Accept the theme classes object
const props = defineProps({
  themeClasses: { 
    type: Object, 
    required: true,
    // Add a default for safety, matching the original violet/yellow theme
    default: () => ({ 
      primaryBg: 'bg-gray-950',
      primaryText: 'text-yellow-300', 
      accentBorder: 'border-yellow-600',
      sidebarBg: 'bg-violet-950',
      activeMenuBg: 'bg-green-800'
    })
  }
});

// Destructure for cleaner template access (optional)
const { themeClasses } = props;

console.log('SkillTreeView: Component loaded.');
</script>

<style scoped>
/* Add any specific styles for SkillTreeView here if needed */
</style>
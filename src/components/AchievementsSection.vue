<template>
  <!-- 
    This is a new, self-contained component to display achievements.
    It's designed to be embedded directly into SanctumView.vue.
  -->
  <div class="mt-10 pt-6 border-t" :class="props.themeClasses.accentBorder">
    <h3 class="text-3xl font-serif mb-6 text-center" :class="[props.themeClasses.primaryText]">
      Achievements
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <!-- Example 1: Completed Achievement -->
      <div 
        class="p-4 rounded-lg border shadow-inner" 
        :class="[props.themeClasses.sidebarBg, props.themeClasses.accentBorder]"
        title="Unlocked: 2025-11-14"
      >
        <div class="flex items-center space-x-3">
          <span class="text-3xl">🏆</span>
          <div class="flex-1">
            <h4 class="text-lg font-bold" :class="props.themeClasses.primaryText">
              Forge a Legacy
            </h4>
            <p class="text-sm italic" :class="props.themeClasses.primaryText">
              "Name Your Character."
            </p>
          </div>
        </div>
      </div>

      <!-- Example 2: In-Progress Achievement -->
      <div 
        class="p-4 rounded-lg border shadow-inner opacity-70" 
        :class="[props.themeClasses.sidebarBg, props.themeClasses.accentBorder]"
      >
        <div class="flex items-center space-x-3">
          <span class="text-3xl">📖</span>
          <div class="flex-1">
            <h4 class="text-lg font-bold" :class="props.themeClasses.primaryText">
              Novice Scholar
            </h4>
            <p class="text-sm italic" :class="props.themeClasses.primaryText">
              "Click 'Generate Knowledge' 100 times."
            </p>
          </div>
        </div>
        <!-- Progress Bar -->
        <div class="w-full rounded-full h-2.5 mt-2" :class="themeClasses.primaryBg">
          <div 
            :class="themeClasses.activeMenuBg" 
            class="h-2.5 rounded-full" 
            style="width: 45%"
            title="45 / 100"
          ></div>
        </div>
      </div>

      <!-- Example 3: Locked Achievement -->
      <div 
        class="p-4 rounded-lg border shadow-inner opacity-40" 
        :class="[props.themeClasses.sidebarBg, props.themeClasses.accentBorder]"
      >
        <div class="flex items-center space-x-3">
          <span class="text-3xl">🔒</span>
          <div class="flex-1">
            <h4 class="text-lg font-bold" :class="props.themeClasses.primaryText">
              ???
            </h4>
            <p class="text-sm italic" :class="props.themeClasses.primaryText">
              "Advance to Prestige 1."
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  // This component only needs the theme classes to style itself.
  themeClasses: { 
    type: Object, 
    required: true,
    default: () => ({ 
      primaryBg: 'bg-white',
      primaryText: 'text-black',
      accentBorder: 'border-gray-400',
      sidebarBg: 'bg-gray-100',
      activeMenuBg: 'bg-gray-300',
    })
  }
});
</script>

<style scoped>
/* Any specific styles for achievements can go here */
</style>
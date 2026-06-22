<template>
  <header class="bg-white text-[#111111] transition-colors duration-300 dark:bg-[#050505] dark:text-white">
    <!-- Top Bar -->
    <div class="animate-slide-down max-w-[1400px] mx-auto mt-7 px-4 py-[2px] border-t-2 border-b-2 border-[#111111] transition-colors duration-300 dark:border-white">
  <div class="h-10 flex items-center justify-between">
  
        <div class="flex items-center gap-2 text-[14px] text-[#333] transition-colors duration-300 dark:text-white">
          <Globe class="w-4 h-4" />
          <span>{{ currentDate }}</span>
        </div>

        <div class="flex items-center gap-3 sm:gap-5">
          <button
            class="group flex items-center gap-1 text-[14px] font-semibold text-[#222] transition-colors duration-300 hover:text-[#c00000] dark:text-white dark:hover:text-[#ff3333]"
          >
            The Menu
            <svg
              class="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            class="theme-toggle flex h-8 w-8 items-center justify-center  text-[#111111] hover:bg-[#c00000] hover:text-white dark:border-white dark:text-white dark:hover:border-[#ff3333] dark:hover:bg-[#ff3333]"
            type="button"
            aria-label="Search"
            title="Search"
          >
            <Search class="h-4 w-4" />
          </button>

          <button
            class="theme-toggle flex h-8 w-8 items-center justify-center border border-[#111111] bg-[#111111] text-white hover:bg-[#c00000] dark:border-white dark:bg-white dark:text-[#050505] dark:hover:border-[#ff3333] dark:hover:bg-[#ff3333] dark:hover:text-white"
            type="button"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>

    <!-- Logo -->
    <div class="py-8">
      <NuxtLink to="/" class="flex justify-center">
        <img
          src="/images/Forbes Middle East.svg"
          alt="Forbes"
          class="h-[70px] w-auto transition duration-300 hover:scale-[1.02] dark:invert"
        />
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Globe, Moon, Search, Sun } from 'lucide-vue-next'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})


</script>

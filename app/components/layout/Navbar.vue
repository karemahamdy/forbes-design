<template>
  <nav class="bg-white transition-colors duration-300 mb-12 dark:bg-[#050505]">
   <div class="max-w-[1400px] mx-auto px-4">
  <div class="border-t border-b border-[#111111] transition-colors duration-300 dark:border-white">
    <div class="h-10 flex items-center justify-center gap-12 overflow-x-auto no-scrollbar m-2">
        <button
          v-for="(cat, index) in categories"
          :key="cat.id"
          @click="selectCategory(cat.slug)"
          class="animated-rule animate-fade-up relative shrink-0 text-[14px] transition-colors"
          :style="{ animationDelay: `${index * 55}ms` }"
          :class="
            isActive(cat.slug)
              ? 'text-[#c00000] text-lg font-bold dark:text-[#ff3333]'
              : 'text-[#222] text-lg hover:text-[#c00000] font-bold dark:text-white dark:hover:text-[#ff3333]'
          "
        >
          {{ cat.name }}
        </button>

      </div>
    </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { useArticles } from '~/composables/useArticles'

const { activeCategory, getCategories } = useArticles()

const { data: categories } = await getCategories()

const isActive = (slug: string | null) => activeCategory.value === slug

const selectCategory = (slug: string | null) => {
  activeCategory.value = slug
  navigateTo('/')
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

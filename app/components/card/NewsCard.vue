<template>
  <NuxtLink
    :to="`/article/${article.slug}`"
    class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
  >
    <article class="motion-card w-full border-t-2 border-transparent bg-white pb-2 transition-colors duration-300 hover:border-[#c00000] dark:bg-[#050505] dark:hover:border-[#ff3333]">
      <!-- Image -->
      <div class="image-shell overflow-hidden bg-[#f1f1f1] dark:bg-[#111111]">
        <img
          :src="article.imageUrl"
          :alt="article.title"
          loading="lazy"
          decoding="async"
          class="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[200px]"
        />
      </div>

      <!-- Title -->
      <h3 class="m-2 line-clamp-3 font-sans text-[18px] font-semibold uppercase leading-[1.45] text-[#111111] transition-colors group-hover:text-[#c00000] dark:text-white dark:group-hover:text-[#ff3333]">
        {{ article.title }}
      </h3>

      <!-- Meta -->
      <div class="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.08em] text-[#666666] transition-colors duration-300 dark:text-white/60">
        <span class="text-[#111111] transition-colors duration-300 dark:text-white">{{ article.category.name }}</span>
        <span class="text-[#c00000] dark:text-[#ff3333]">-</span>
        <span>{{ article.publishedAt }}</span>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/types'
defineProps<{ article: Article }>()
</script>

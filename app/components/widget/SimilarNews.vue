<template>
  <section class="mt-8 pt-10">
    <!-- Section heading with full-width rule -->
    <div class="animated-rule mb-6 flex items-center gap-3 border-b border-[#111111] pb-2 transition-colors duration-300 dark:border-white sm:mb-8 sm:gap-5">
      <h2 class="shrink-0 font-sans text-[16px] font-bold uppercase tracking-[0.18em] text-[#111111] transition-colors duration-300 dark:text-white sm:text-[18px]">
        SIMILAR NEWS
      </h2>
    </div>

    <!-- 3-image row -->
    <ul class="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
      <li
        v-for="(article, index) in articles"
        :key="article.id"
        class="animate-fade-up"
        :style="{ animationDelay: `${index * 75}ms` }"
      >
        <NuxtLink
          :to="`/article/${article.slug}`"
          class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
        >
          <article class="motion-card w-full border-t-2 border-transparent bg-white pb-2 transition-colors duration-300 hover:border-[#c00000] dark:bg-[#050505] dark:hover:border-[#ff3333]">
            <!-- Image -->
            <div class="image-shell mb-3 overflow-hidden bg-[#f1f1f1] dark:bg-[#111111]" style="aspect-ratio: 16/10;">
              <img
                :src="article.imageUrl"
                :alt="article.title"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <!-- Title -->
            <h3 class="mb-2 line-clamp-3 font-sans text-[14px] font-semibold uppercase leading-snug text-[#111111] transition-colors group-hover:text-[#c00000] dark:text-white dark:group-hover:text-[#ff3333] sm:text-[15px]">
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
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '~/types'

defineProps<{
  articles: Article[]
}>()
</script>

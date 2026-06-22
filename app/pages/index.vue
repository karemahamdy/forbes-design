<template>
  <div>
    <!-- Active filter banner -->
    <div v-if="activeCategory || searchQuery"
      class="animate-fade-up mb-6 flex items-center justify-between border-b border-[#111111] pb-4 transition-colors duration-300 dark:border-white">
      <h2
        class="font-sans text-[13px] font-semibold uppercase tracking-widest text-[#111111] transition-colors duration-300 dark:text-white">
        {{ activeCategoryName || `Search: "${searchQuery}"` }}
      </h2>

    </div>

    <!-- Loading skeletons -->
    <div v-if="showLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardNewsCardSkeleton v-for="i in 6" :key="i" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="animate-fade-up py-16 text-center">
      <p class="mb-4 text-sm text-[#c00000] dark:text-[#ff3333]">Failed to load articles.</p>
      <button @click="refresh()"
        class="theme-toggle bg-[#111111] px-4 py-2 text-xs font-semibold text-white hover:bg-[#c00000] dark:bg-white dark:text-[#050505] dark:hover:bg-[#ff3333] dark:hover:text-white">Retry</button>
    </div>

    <!-- Empty -->


    <!-- Homepage: Featured + Grid -->
    <div v-else>
      <!-- Featured hero (only when no filters active) -->
      <div v-if="featured && !activeCategory && !searchQuery"
        class="motion-card animate-fade-up mb-8 border-t-4 border-[#c00000] bg-white transition-colors duration-300 dark:border-[#ff3333] dark:bg-[#050505]">
        <div class="cursor-pointer group" @click="navigateTo(`/article/${featured.slug}`)">
          <!-- Hero image -->
          <div class="image-shell overflow-hidden bg-[#f1f1f1] dark:bg-[#111111]" style="aspect-ratio: 980/540;">
            <img :src="featured.imageUrl" :alt="featured.title" loading="lazy" decoding="async"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          </div>

          <div class="p-6 md:p-8">
            <!-- Author row -->
            <div
              class="mb-4 flex items-center gap-3 border-b border-t border-[#111111] py-4 transition-colors duration-300 dark:border-white">
              <img :src="featured.author.avatar" :alt="featured.author.name"
                class="h-10 w-10 rounded-full object-cover dark:border-[#ff3333]" />
              <div>
                <div
                  class="font-sans text-[20px] font-bold uppercase tracking-wider text-[#111111] transition-colors duration-300 dark:text-white">
                  {{ featured.author.name }}</div>
                <div
                  class="flex items-center gap-1 font-sans text-[20px] text-black transition-colors duration-300 dark:text-white/70">
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {{ featured.publishedAt }}
                </div>
              </div>
            </div>

            <!-- Title -->
            <h1
              class="animated-rule mb-4 border-b border-[#111111] pb-2 font-sans text-[22px] font-bold uppercase leading-tight text-[#111111] transition-colors group-hover:text-[#c00000] dark:border-white dark:text-white dark:group-hover:text-[#ff3333] sm:text-[28px]">
              {{ featured.title }}
            </h1>


            <div
              class="article-body font-sans text-[14px] leading-[1.75] text-[#444444] transition-colors duration-300 dark:text-white sm:text-[15px]"
              v-html="featured.content"></div>
          </div>
        </div>
      </div>

      <!-- Article grid -->
      <div class="pb-8">
        <WidgetSimilarNews :articles="feedList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useArticles } from '~/composables/useArticles'
import { useDelayedPending } from '~/composables/useDelayedPending'

const { activeCategory, searchQuery, getArticles, getCategories } = useArticles()

const { data: articles, pending, error, refresh } = await getArticles()
const { data: categories } = await getCategories()
const { showLoading } = useDelayedPending(pending)

const activeCategoryName = computed(() => {
  if (!activeCategory.value || !categories.value) return null
  return categories.value.find(c => c.slug === activeCategory.value)?.name ?? null
})

const featured = computed(() => {
  if (!articles.value?.length) return null
  return articles.value.find(a => a.isFeatured) ?? articles.value[0]
})

const feedList = computed(() => {
  if (!articles.value) return []
  if (activeCategory.value || searchQuery.value) return articles.value
  return articles.value.filter(a => a.id !== featured.value?.id)
})


useSeoMeta({
  title: 'Forbes Middle East — Latest Business & Culture News',
  description: 'Premium business insights, technology trends, and cultural news from across the Middle East.',
  ogImage: 'https://images.unsplash.com/photo-1548679900-4b2c37e90248?w=1200&q=80',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.article-body :deep(p) {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.article-body :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.article-body :deep(li) {
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.article-body :deep(strong) {
  font-weight: 600;
}

.article-body :deep(p),
.article-body :deep(li),
.article-body :deep(strong) {
  color: inherit;
}
</style>
<template>
  <div>
    <!-- Loading -->
    <CardArticleSkeleton v-if="pending" />

    <!-- Error / Not Found -->
    <div v-else-if="error || !data" class="animate-fade-up bg-white p-12 text-center transition-colors duration-300 dark:bg-[#050505]">
      <p class="mb-4 text-sm text-[#666666] transition-colors duration-300 dark:text-white/70">Article not found.</p>
      <NuxtLink to="/" class="text-xs font-semibold text-[#c00000] hover:underline dark:text-[#ff3333]">&larr; Back to Home</NuxtLink>
    </div>

    <!-- Article Content -->
    <div v-else>
      <!-- Article container -->
      <div class="animate-fade-up border-t-4 border-[#c00000] bg-white transition-colors duration-300 dark:border-[#ff3333] dark:bg-[#050505]">
        <!-- Hero Image - full width -->
        <div class="image-shell overflow-hidden bg-[#f1f1f1] dark:bg-[#111111]" style="aspect-ratio: 980/653;">
          <img
            :src="data.article.imageUrl"
            :alt="data.article.title"
            class="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

        <div class="max-w-screen-md mx-auto px-6 py-8">
          <!-- Author row -->
          <div class="mb-4 flex items-center gap-3 border-b border-[#111111] pb-4 transition-colors duration-300 dark:border-white">
            <img
              :src="data.article.author.avatar"
              :alt="data.article.author.name"
              class="h-9 w-9 rounded-full border-2 border-[#c00000] object-cover dark:border-[#ff3333]"
            />
            <div>
              <div class="font-sans text-[11px] font-bold uppercase tracking-wider text-[#111111] transition-colors duration-300 dark:text-white">
                {{ data.article.author.name }}
              </div>
              <div class="mt-0.5 flex items-center gap-1.5 font-sans text-[10px] text-[#666666] transition-colors duration-300 dark:text-white/60">
                <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {{ data.article.publishedAt }}
              </div>
            </div>
          </div>

          <!-- Article Title -->
          <h1 class="animated-rule mb-8 border-b border-[#111111] pb-3 font-sans text-[20px] font-bold uppercase leading-tight text-[#111111] transition-colors duration-300 dark:border-white dark:text-white sm:text-[24px]">
            {{ data.article.title }}
          </h1>

          <!-- Article Body -->
          <div
            class="article-body font-sans text-[14px] leading-[1.75] text-[#444444] transition-colors duration-300 dark:text-white/75 sm:text-[15px]"
            v-html="data.article.content"
          ></div>
        </div>
      </div>

      <!-- Similar News Section -->
      <div class="max-w-screen-xl mx-auto px-6 pb-4">
        <WidgetSimilarNews :articles="data.similar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'

const route = useRoute()
const slug = route.params.slug as string
const { getArticleBySlug } = useArticles()

const { data, pending, error } = await getArticleBySlug(slug)

// Dynamic SEO
useSeoMeta({
  title: () => data.value ? `${data.value.article.title} | Forbes Middle East` : 'Forbes Middle East',
  ogTitle: () => data.value ? data.value.article.title : 'Forbes Middle East',
  description: () => data.value?.article.excerpt ?? '',
  ogDescription: () => data.value?.article.excerpt ?? '',
  ogImage: () => data.value?.article.imageUrl ?? '',
  twitterCard: 'summary_large_image'
})

// JSON-LD structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (!data.value) return '{}'
        const art = data.value.article
        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: art.title,
          description: art.excerpt,
          image: [art.imageUrl],
          datePublished: new Date().toISOString(),
          author: [{ '@type': 'Person', name: art.author.name }],
          publisher: {
            '@type': 'Organization',
            name: 'Forbes Middle East'
          }
        })
      })
    }
  ]
})
</script>

<style scoped>
/* Article body HTML styles */
.article-body :deep(p) {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.article-body :deep(ul) {
  list-style: disc;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.article-body :deep(li) {
  color: #374151;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.article-body :deep(strong) {
  color: #111827;
  font-weight: 600;
}

:global(.dark) .article-body :deep(p),
:global(.dark) .article-body :deep(li) {
  color: rgba(255, 255, 255, 0.76);
}

:global(.dark) .article-body :deep(strong) {
  color: #ffffff;
}
</style>

import { ref, computed } from 'vue'
import type { Article, Category } from '~/types'

export const useArticles = () => {
  const activeCategory = ref<string | null>(null)
  const searchQuery = ref<string>('')

  const getCategories = () => {
    return useFetch<Category[]>('/api/categories', {
      key: 'categories'
    })
  }

  const getArticles = (opts: { category?: string | null; search?: string } = {}) => {
    return useFetch<Article[]>('/api/articles', {
      query: computed(() => {
        const queryParams: Record<string, string> = {}
        const category = opts.category !== undefined ? opts.category : activeCategory.value
        const search = opts.search !== undefined ? opts.search : searchQuery.value

        if (category) queryParams.category = category
        if (search) queryParams.search = search

        return queryParams
      }),
      watch: [activeCategory, searchQuery],
      key: 'articles-list'
    })
  }

  const getArticleBySlug = (slug: string) => {
    return useFetch<{ article: Article; similar: Article[] }>(`/api/articles/${slug}`, {
      key: `article-${slug}`
    })
  }

  return {
    activeCategory,
    searchQuery,
    getCategories,
    getArticles,
    getArticleBySlug
  }
}

import { defineEventHandler, getQuery } from 'h3'
import { mockArticles } from '../utils/mockDb'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const categorySlug = query.category as string
  const searchQuery = query.search as string

  let articles = [...mockArticles]

  if (categorySlug) {
    articles = articles.filter(
      (a) => a.category.slug.toLowerCase() === categorySlug.toLowerCase()
    )
  }

  if (searchQuery) {
    const term = searchQuery.toLowerCase()
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(term) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.content.toLowerCase().includes(term)
    )
  }

  return articles
})

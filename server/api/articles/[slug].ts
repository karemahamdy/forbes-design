import { defineEventHandler, createError } from 'h3'
import { mockArticles } from '../../utils/mockDb'

export default defineEventHandler((event) => {
  const slug = event.context.params?.slug

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug parameter is required'
    })
  }

  const article = mockArticles.find((a) => a.slug === slug)

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: `Article with slug "${slug}" not found`
    })
  }

  // Get similar articles: matching category, excluding current, limit to 3
  let similar = mockArticles.filter(
    (a) => a.category.id === article.category.id && a.id !== article.id
  )

  // If we don't have enough, fill with other articles
  if (similar.length < 3) {
    const additional = mockArticles.filter(
      (a) => a.category.id !== article.category.id && a.id !== article.id
    )
    similar = [...similar, ...additional].slice(0, 3)
  } else {
    similar = similar.slice(0, 3)
  }

  return {
    article,
    similar
  }
})

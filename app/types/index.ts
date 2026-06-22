export interface Author {
  id: string
  name: string
  avatar: string
  role?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  color?: string // e.g. for dynamic badges/accents
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // Rich body text / HTML
  imageUrl: string
  imageCaption?: string
  author: Author
  category: Category
  tags: Tag[]
  publishedAt: string // ISO string or human date
  readingTimeMin: number
  isFeatured?: boolean
}

export interface NavigationItem {
  name: string
  path: string
  isActive?: boolean
}

export interface NewsletterInput {
  email: string
}

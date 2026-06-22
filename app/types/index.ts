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
  color?: string 
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
  content: string 
  imageUrl: string
  imageCaption?: string
  author: Author
  category: Category
  tags: Tag[]
  publishedAt: string 
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

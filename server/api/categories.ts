import { defineEventHandler } from 'h3'
import { mockCategories } from '../utils/mockDb'

export default defineEventHandler(() => {
  return mockCategories
})

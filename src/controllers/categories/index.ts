import express from 'express'

import getAllCategories from './getAllCategories'
import renderCategoryPage from './renderCategoryPage'

const categories = express.Router()

categories.get('/', getAllCategories)
categories.get('/:categorySlug', renderCategoryPage)

export default categories

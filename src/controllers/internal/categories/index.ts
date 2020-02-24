import express from 'express'

import getAllCategories from './getAllCategories'
import renderNewCategoryPage from './renderNewCategoryPage'
import createCategory from './createCategory'

const internalCategories = express.Router()

internalCategories.get('/', getAllCategories)
internalCategories.get('/new', renderNewCategoryPage)
internalCategories.post('/create', createCategory)

export default internalCategories

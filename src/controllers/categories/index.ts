import express from 'express'

import getAllCategories from './getAllCategories'

const categories = express.Router()

categories.get('/', getAllCategories)

export default categories

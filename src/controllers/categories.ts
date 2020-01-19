import express from 'express'
import Category from '../models/category'

const router = express.Router()

router.get('/', (req, res) => {
  const categories = Category.all()

  res.render('customer/categories', {categories: categories})
})

export default router

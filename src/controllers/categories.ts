import express from 'express'
import { Category } from '../models'

const router = express.Router()

router.get('/', async (req, res) => {
  const { data: categories, categoryError } = await Category.all()

  res.render('customer/categories', {categories: categories})
})

export default router

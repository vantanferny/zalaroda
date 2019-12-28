import express from 'express'

import Category from '../../models/category'
import Shop from '../../models/shop'

const router = express.Router()

router.get('/', (req, res) => {
  const categories = Category.all()
  const shops = Shop.all()

  res.render('home', {
    categories: categories,
    shops: shops,
  })
})

export default router

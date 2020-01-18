import express from 'express'

import Category from '../models/category'
import Shop from '../models/shop'

const router = express.Router()

router.get('/', async (req, res) => {
  const categories = Category.all()
  const { data: shops, error } = await Shop.all()

  if (error) {
    res.status(504)
    res.render('error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  } else {
    res.render('home', {
      categories: categories,
      shops: shops,
    })
  }
})

export default router

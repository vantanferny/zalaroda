import express from 'express'

import Category from '../models/category'
import Shop from '../models/shop'

const router = express.Router()

router.get('/', async (_, res) => {
  const errors = []
  const { data: categories, categoryError } = await Category.all()
  const { data: shops, shopError } = await Shop.all()

  if (categoryError) errors.push(categoryError)
  if (shopError) errors.push(shopError)

  if (errors.length > 0) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: errors[0]
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

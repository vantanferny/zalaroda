import express from 'express'

import Category from '../../models/category'
import Shop from '../../models/shop'
import slugifier from '../../controllers/internal/util/slugifier'

const router = express.Router()

router.get('/', async (req, res) => {
  const {data: shops, error } = await Shop.all()

  if (error) {
    res.status(504)
    res.render('error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  } else {
    res.render('internal/shops', {shops: shops})
  }
})

router.get('/new', async (req, res) => {
    const {data: categories, error } = await Category.all()

    if (error) {
      res.status(504)
      res.render('error',
        {
          title: '504: Gateway Timeout',
          message: error
        }
      )
    } else {
      res.render('internal/shops/new', {categories: categories})
    }
})

router.post('/create', async (req, res) => {
  const name = req.body.name
  const slug = slugifier(req.body.name)
  const category_id = req.body.category_id
  const shop = {
    name: name,
    slug: slug,
    category_id: category_id
  }

  const { success, error } = await Shop.create(shop)

  if (success) {
    res.redirect('/internal/shops') // add message
  } else {
    res.render('error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  }
})

export default router

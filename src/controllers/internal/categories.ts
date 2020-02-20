import express from 'express'
import Category from '../../models/category'

const router = express.Router()

router.get('/', async (req, res) => {
  const {data: categories, error } = await Category.all()

  if (error) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  } else {
    res.render('internal/categories', {categories: categories})
  }
})

router.get('/new', (req, res) => {
  res.render('internal/categories/new')
})

router.post('/create', async (req, res) => {
  const name = req.body.name
  const category = {name: name} //typescript this shit

  const { success, error } = await Category.create(category)

  if (success) {
    res.redirect('/internal/categories') // add message
  } else {
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  }
})

export default router

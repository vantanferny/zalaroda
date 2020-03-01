import express from 'express'
import { Item } from '../models'

const router = express.Router()

router.get('/', (req, res) => {
  const items = Item.all()

  res.render('admin/inventory', {
    items: items,
    user: req.session.user,
  })
})

export default router

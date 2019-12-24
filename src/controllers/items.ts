import express from 'express'
import Item from '../models/item'

const router = express.Router()

router.get('/', (req, res) => {
    const items = Item.all()

    res.render('admin/inventory', {items: items})
})

export default router

import express from 'express'

import { Shop, Item } from '../models'

const router = express.Router()

router.get('/:id', (req, res) => {
    const shopId = req.params.id
    const shop = Shop.get(shopId)

    res.render('customer/shop', {shop: shop})
})

router.get('/:id/:item_id', (req, res) => {
    const itemId = req.params.item_id
    const item = Item.get(itemId)

    res.render('customer/item', {item: item})
})

export default router

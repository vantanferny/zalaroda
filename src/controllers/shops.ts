import express from 'express'
import Shop from '../models/shop'

const router = express.Router()

router.get('/:id', (req, res) => {
    const shopId = req.params.id
    const shop = Shop.get(shopId)

    res.render('customer/shop', {shop: shop})
})

export default router

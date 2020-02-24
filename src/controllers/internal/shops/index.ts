import express from 'express'

import getAllShops from './getAllShops'
import createShop from './createShop'
import renderNewShopPage from './renderNewShopPage'

const router = express.Router()

router.get('/', getAllShops)
router.get('/new', renderNewShopPage)
router.post('/create', createShop)

export default router

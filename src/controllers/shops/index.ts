import express from 'express'

import renderShopPage from './renderShopPage'
import renderShopItem from './renderShopItem'

const shops = express.Router()

shops.get('/:shop_slug', renderShopPage)
shops.get('/:shop_slug/:item_slug', renderShopItem)

export default shops

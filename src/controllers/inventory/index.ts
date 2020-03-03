import express from 'express'

import renderShopItems from './renderShopItems'

const inventory = express.Router()

inventory.get('/', renderShopItems)

export default inventory

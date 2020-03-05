import express from 'express'

import renderShopItems from './renderShopItems'
import renderAddItemPage from './renderAddItemPage'
import createItem from './createItem'

const inventory = express.Router()

inventory.get('/', renderShopItems)
inventory.get('/add', renderAddItemPage)
inventory.post('/create', createItem)

export default inventory

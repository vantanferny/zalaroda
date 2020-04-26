import express from 'express'

import renderShopItems from './renderShopItems'
import renderAddItemPage from './renderAddItemPage'
import renderEditItemPage from './renderEditItemPage'
import createItem from './createItem'
import updateItem from './updateItem'

const inventory = express.Router()

inventory.get('/', renderShopItems)
inventory.get('/add', renderAddItemPage)
inventory.post('/create', createItem)
inventory.get('/edit', renderEditItemPage)
inventory.post('/update', updateItem)

export default inventory

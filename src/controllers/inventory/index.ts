import express from 'express'

import renderShopItems from './renderShopItems'
import renderAddItemPage from './renderAddItemPage'
import renderViewItemPage from './renderViewItemPage'
import renderEditItemPage from './renderEditItemPage'
import createItem from './createItem'
import updateItem from './updateItem'

const inventory = express.Router()

inventory.get('/', renderShopItems)
inventory.get('/view/:item_slug', renderViewItemPage)
inventory.get('/add', renderAddItemPage)
inventory.post('/create', createItem)
inventory.get('/edit/:item_slug', renderEditItemPage)
inventory.post('/update', updateItem)

export default inventory

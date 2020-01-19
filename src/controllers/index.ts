import express from 'express'

import analytics from './analytics'
import categories from './categories'
import home from './home'
import internal from './internal'
import items from './items'
import shops from './shops'

const controllers = express.Router()

controllers.use('/', home)
controllers.use('/categories', categories)
controllers.use('/dashboard', analytics)
controllers.use('/internal', internal)
controllers.use('/inventory', items)
controllers.use('/shops', shops)

export default controllers

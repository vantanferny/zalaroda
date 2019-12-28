import express from 'express'

import home from './home'
import items from './items'
import analytics from './analytics'

const controllers = express.Router()

controllers.use('/', home)
controllers.use('/inventory', items)
controllers.use('/dashboard', analytics)

export default controllers

import express from 'express'

import items from './items'
import analytics from './analytics'

const controllers = express.Router()

controllers.use('/inventory', items)
controllers.use('/dashboard', analytics)

export default controllers

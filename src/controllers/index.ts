import express from 'express'

import analytics from './analytics'
import { signup, login, logout } from './auth'
import categories from './categories'
import home from './home'
import internal from './internal'
import items from './items'
import shops from './shops'

const controllers = express.Router()

controllers.use('/', home)
controllers.use('/signup', signup)
controllers.use('/login', login)
controllers.use('/logout', logout)
controllers.use('/categories', categories)
controllers.use('/shops', shops)
controllers.use('/dashboard', analytics)
controllers.use('/inventory', items)
controllers.use('/internal', internal)

export default controllers

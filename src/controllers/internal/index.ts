import express from 'express'

import categories from './categories'
import home from './home'
import shops from './shops'

const internal = express.Router()

internal.use('/', home)
internal.use('/categories', categories)
internal.use('/shops', shops)

export default internal

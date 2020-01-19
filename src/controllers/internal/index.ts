import express from 'express'

import categories from './categories'
import home from './home'

const internal = express.Router()

internal.use('/', home)
internal.use('/categories', categories)

export default internal

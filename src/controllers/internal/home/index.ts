import express from 'express'

import renderHomePage from './renderHomePage'

const internalHome = express.Router()

internalHome.get('/', renderHomePage)

export default internalHome

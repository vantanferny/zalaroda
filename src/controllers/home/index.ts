import express from 'express'

const home = express.Router()

import renderHomeData from './renderHomeData'

home.get('/', renderHomeData)

export default home

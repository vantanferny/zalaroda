import express from 'express'

import logUserOut from './logUserOut'

const logout = express.Router()

logout.get('/', logUserOut)

export default logout

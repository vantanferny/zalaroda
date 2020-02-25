import express from 'express'

import renderLoginPage from './renderLoginPage'
import logUserIn from './logUserIn'

const login = express.Router()

login.get('/', renderLoginPage)
login.post('/', logUserIn)

export default login

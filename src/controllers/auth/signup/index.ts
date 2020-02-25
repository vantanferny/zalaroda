import express from 'express'

import renderSignupPage from './renderSignupPage'
import signUserUp from './signUserUp'

const signup = express.Router()

signup.get('/', renderSignupPage)
signup.post('/', signUserUp)

export default signup

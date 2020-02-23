import express from 'express'

import { UserSignUpInput } from '../../types'
import { validateSignUpInput } from '../../controllers/validation'

const signup = express.Router()

signup.get('/', (req, res) => {
  res.render('auth/signup')
})

signup.post('/', (req, res) => {
  const email: string = req.body.email
  const firstName: string = req.body.first_name.trim()
  const lastName: string = req.body.last_name.trim()
  const name: string = firstName + " " + lastName
  const mobileNumber: string = req.body.mobile_number
  const password: string = req.body.password

  const signupInput: UserSignUpInput = {
    email: email,
    password: password,
    name: name,
    mobileNumber: mobileNumber,
  }

  const validationResult = validateSignUpInput(signupInput)

  if (!validationResult.valid) {
    res.json({errors: validationResult.errors})

    return
  }

  // model shit

  res.json({success: true})
})

export default signup

import express from 'express'

import { UserSignUpInput, ParsedUserSignUpInput, ValidationResult } from '../../types'
import { validateSignUpInput, sanitizeSignUpInput } from '../util'

const signup = express.Router()

signup.get('/', (req, res) => {
  res.render('auth/signup', { params: null, errors: null })
})

signup.post('/', (req, res) => {
  const signupInput: UserSignUpInput = req.body
  const validationResult: ValidationResult = validateSignUpInput(signupInput)

  if (!validationResult.valid) {
    res.render('auth/signup', { params: signupInput, errors: validationResult.errors })

    return
  }

  const parsedSignupInput: ParsedUserSignUpInput = sanitizeSignUpInput(signupInput)

  // model shit - if success, add session

  res.json({success: true})
})

export default signup

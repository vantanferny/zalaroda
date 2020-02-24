import express from 'express'

import { UserSignUpInput, ParsedUserSignUpInput, ValidationResult, QueryResult } from '../../types'
import { validateSignUpInput, parseSignUpInput } from '../util'
import { User } from '../../models'

const signup = express.Router()

signup.get('/', (req, res) => {
  res.render('auth/signup', { params: null, errors: null })
})

signup.post('/', async (req, res) => {
  const signupInput: UserSignUpInput = req.body
  const validationResult: ValidationResult = validateSignUpInput(signupInput)

  if (!validationResult.valid) {
    res.render('auth/signup', { params: signupInput, errors: validationResult.errors })

    return
  }

  const parsedSignupInput: ParsedUserSignUpInput = await parseSignUpInput(signupInput)
  const userCreationResult: QueryResult = await User.create(parsedSignupInput) 

  res.json({userCreationResult: userCreationResult})
})

export default signup

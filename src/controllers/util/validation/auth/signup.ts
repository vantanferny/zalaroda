import validator from 'validator'

import { UserSignUpInput, ValidationResult } from '../../../../types'

const validateSignUpInput = (signupInput: UserSignUpInput): ValidationResult => {
  const validationResult: ValidationResult = {
      valid: true,
      errors: []
  }
  // add name, password validation here next time
  if (!validator.isEmail(signupInput.email)) validationResult.errors.push("Email invalid.")
  if (!validator.isMobilePhone(signupInput.mobileNumber)) validationResult.errors.push("Mobile number invalid.")

  if (validationResult.errors.length > 0) validationResult.valid = false

  return validationResult
}

export default validateSignUpInput

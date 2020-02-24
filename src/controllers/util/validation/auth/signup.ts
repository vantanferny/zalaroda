import validator from 'validator'

import { UserSignUpInput, ValidationResult } from '../../../../types'

const validateSignUpInput = (signupInput: UserSignUpInput): ValidationResult => {
  const validationResult: ValidationResult = {
      valid: true,
      errors: []
  }

  if (!validator.isLength(signupInput.firstName, { min: 2, max: 48 })) validationResult.errors.push("First Name ought to be 2 - 48 characters invalid.")
  if (!validator.isLength(signupInput.lastName, { min: 2, max: 48 })) validationResult.errors.push("Last Name ought to be 2 - 48 characters invalid.")
  if (!validator.isLength(signupInput.password, { min: 6, max: 48 })) validationResult.errors.push("Password ought to be 6 - 48 characters invalid.")
  if (!validator.isEmail(signupInput.email)) validationResult.errors.push("Email invalid.")
  if (!validator.isMobilePhone(signupInput.mobileNumber)) validationResult.errors.push("Mobile number invalid.")

  if (validationResult.errors.length > 0) validationResult.valid = false

  return validationResult
}

export default validateSignUpInput

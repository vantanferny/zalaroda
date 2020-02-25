import validator from 'validator'

import { LoginCredentials, ValidationResult } from '../../../../types'

const validateLoginInput = (loginInput: LoginCredentials): ValidationResult => {
  const validationResult: ValidationResult = {
      valid: true,
      errors: []
  }

  if (!validator.isEmail(loginInput.email)) validationResult.errors.push("Email invalid.")
  if (!validator.isLength(loginInput.password, { min: 6, max: 48 })) validationResult.errors.push("Password ought to be 6 - 48 characters invalid.")

  if (validationResult.errors.length > 0) validationResult.valid = false

  return validationResult
}

export default validateLoginInput

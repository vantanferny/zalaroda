import { UserSignUpInput, ParsedUserSignUpInput } from '../../../../types'

const sanitizeSignUpInput = (signupInput: UserSignUpInput): ParsedUserSignUpInput => {
  const parsedUserSignUpInput: ParsedUserSignUpInput = {
    email: signupInput.email,
    name: signupInput.firstName.trim() + " " + signupInput.lastName.trim(),
    mobileNumber: signupInput.mobileNumber, // add formatter here in the future
    password: signupInput.password,
  }

  return parsedUserSignUpInput
}

export default sanitizeSignUpInput

import { UserSignupInput, ParsedUserSignupInput } from '../../../../types'
import { encryptPassword } from '../../encryption'

const parseSignUpInput = async (signupInput: UserSignupInput): Promise<ParsedUserSignupInput> => {
  const parsedUserSignupInput: ParsedUserSignupInput = {
    email: signupInput.email,
    name: signupInput.firstName.trim() + " " + signupInput.lastName.trim(),
    mobileNumber: signupInput.mobileNumber, // add formatter here in the future
    password: await encryptPassword(signupInput.password),
  }

  return parsedUserSignupInput
}

export default parseSignUpInput

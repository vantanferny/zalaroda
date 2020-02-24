import { UserSignUpInput, ParsedUserSignUpInput } from '../../../../types'
import { encryptPassword } from '../../encryption'

const parseSignUpInput = async (signupInput: UserSignUpInput): Promise<ParsedUserSignUpInput> => {
  const parsedUserSignUpInput: ParsedUserSignUpInput = {
    email: signupInput.email,
    name: signupInput.firstName.trim() + " " + signupInput.lastName.trim(),
    mobileNumber: signupInput.mobileNumber, // add formatter here in the future
    password: await encryptPassword(signupInput.password),
  }

  return parsedUserSignUpInput
}

export default parseSignUpInput

import { UserSignupInput, ParsedUserSignupInput, ValidationResult, WriteQueryResult } from '../../../types'
import { validateSignupInput, parseSignUpInput } from '../../util'
import { User } from '../../../models'

const signUserUp =  async (req, res) => {
  const signupInput: UserSignupInput = req.body
  const validationResult: ValidationResult = validateSignupInput(signupInput)

  if (!validationResult.valid) {
    res.render('auth/signup', { params: signupInput, errors: validationResult.errors })

    return
  }

  const parsedSignupInput: ParsedUserSignupInput = await parseSignUpInput(signupInput)
  const userCreationResult: WriteQueryResult = await User.create(parsedSignupInput)

  res.json({ userCreationResult: userCreationResult }) // log in and redirect to home
}

export default signUserUp

import { UserSignUpInput, ParsedUserSignUpInput, ValidationResult, WriteQueryResult } from '../../../types'
import { validateSignUpInput, parseSignUpInput } from '../../util'
import { User } from '../../../models'

const signUserUp =  async (req, res) => {
  const signupInput: UserSignUpInput = req.body
  const validationResult: ValidationResult = validateSignUpInput(signupInput)

  if (!validationResult.valid) {
    res.render('auth/signup', { params: signupInput, errors: validationResult.errors })

    return
  }

  const parsedSignupInput: ParsedUserSignUpInput = await parseSignUpInput(signupInput)
  const userCreationResult: WriteQueryResult = await User.create(parsedSignupInput)

  res.json({ userCreationResult: userCreationResult }) // log in and redirect to home
}

export default signUserUp

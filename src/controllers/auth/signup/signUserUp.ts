import {
  UserSignupInput,
  ParsedUserSignupInput,
  ValidationResult,
  WriteQueryResult,
  Flash,
  LoginCredentials,
  AuthenticationResult
} from '../../../types'
import { validateSignupInput, parseSignUpInput } from '../../util'
import { User } from '../../../models'
import authenticateLoginCredentials from '../login/authenticateLoginCredentials'

const signUserUp =  async (req, res) => {
  const signupInput: UserSignupInput = req.body
  const validationResult: ValidationResult = validateSignupInput(signupInput)

  if (!validationResult.valid) {
    const flash: Flash = {
      type: 'error',
      message: validationResult.errors.join('\n')
    }

    req.session.flash = flash
    req.session.params = signupInput
    res.redirect('/signup')

    return
  }

  const parsedSignupInput: ParsedUserSignupInput = await parseSignUpInput(signupInput)
  const userCreationResult: WriteQueryResult = await User.create(parsedSignupInput)

  if (userCreationResult.success) {
    const loginCredentials: LoginCredentials = {
      email: signupInput.email,
      password: signupInput.password,
    }
    const authenticationResult: AuthenticationResult = await authenticateLoginCredentials(loginCredentials)
    const flash: Flash = {
      type: 'success',
      message: "Signup Successful."
    }

    if (authenticationResult.success) {
      req.session.user = authenticationResult.sessionUser
    } else {
      flash.type = "error"
      flash.message = authenticationResult.error
    }

    req.session.flash = flash

    res.redirect('/')
  } else {
    const flash: Flash = {
      type: 'error',
      message: userCreationResult.error
    }

    req.session.flash = flash
    req.session.params = signupInput

    res.redirect('/signup')
  }
}

export default signUserUp

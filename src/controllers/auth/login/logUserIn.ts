import { LoginCredentials, AuthenticationResult, Flash } from '../../../types'

import authenticateLoginCredentials from './authenticateLoginCredentials'

const logUserIn = async (req, res) => {
  const loginCredentials: LoginCredentials = req.body
  const authenticationResult: AuthenticationResult = await authenticateLoginCredentials(loginCredentials)

  if (authenticationResult.success) {
    req.session.user = authenticationResult.sessionUser

    const flash: Flash = {
      type: 'success',
      message: 'Login Successful.',
    }
    req.session.flash = flash

    res.redirect('/')
  } else {
    const flash: Flash = {
      type: 'error',
      message: authenticationResult.error,
    }

    req.session.flash = flash
    req.session.params = loginCredentials

    res.redirect('/login')
  }
}

export default logUserIn

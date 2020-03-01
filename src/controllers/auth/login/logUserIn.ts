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

    // redirect instead of render fucker.

    res.render('auth/login', { params: loginCredentials, errors: [authenticationResult.error] })
  }
}

export default logUserIn

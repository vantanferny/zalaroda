import { LoginCredentials, AuthenticationResult } from '../../../types'

import authenticateLoginCredentials from './authenticateLoginCredentials'

const logUserIn = async (req, res) => {
  const loginCredentials: LoginCredentials = req.body

  const authenticationResult: AuthenticationResult = await authenticateLoginCredentials(loginCredentials)

  if (authenticationResult.success) {
    req.session.user = authenticationResult.sessionUser
    req.session.flash = {
      type: 'success',
      message: 'Login Successful.',
    }

    res.redirect('/')
  } else {
    res.render('auth/login', { params: loginCredentials, errors: [authenticationResult.error] })
  }
}

export default logUserIn

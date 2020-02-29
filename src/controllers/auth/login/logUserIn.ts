import { LoginCredentials, AuthenticationResult } from '../../../types'

import authenticateLoginCredentials from './authenticateLoginCredentials'

const logUserIn = async (req, res) => {
  const loginCredentials: LoginCredentials = req.body

  const authenticationResult: AuthenticationResult = await authenticateLoginCredentials(loginCredentials)

  if (authenticationResult.success) {
    // req.session.sessionUser = authenticationResult.sessionUser

    // add flash message here
    res.redirect('/')
  } else {
    res.render('auth/login', { params: loginCredentials, errors: [authenticationResult] })
  }
}

export default logUserIn

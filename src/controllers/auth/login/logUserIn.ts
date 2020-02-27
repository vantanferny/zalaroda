import { LoginCredentials, AuthenticationResult } from '../../../types'

import authenticateLoginCredentials from './authenticateLoginCredentials'

const logUserIn = (req, res) => {
  const loginCredentials: LoginCredentials = req.body

  const authenticationResult: AuthenticationResult = authenticateLoginCredentials(loginCredentials)

  if (authenticationResult.success) {
    // create session
    
    // flash message
    res.redirect('/')
  } else {
    res.render('auth/login', { params: loginCredentials, errors: [authenticationResult] })
  }
}

export default logUserIn

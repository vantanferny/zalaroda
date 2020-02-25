import { LoginCredentials, AuthenticationResult } from '../../../types'

const authenticateLoginCredentials = (loginCredentials: LoginCredentials): AuthenticationResult => {
  const authenticationResult: AuthenticationResult = {
    success: true,
    error: null
  }

  return authenticationResult
}

export default authenticateLoginCredentials

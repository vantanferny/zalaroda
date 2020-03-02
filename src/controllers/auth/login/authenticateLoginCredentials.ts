import bcrypt from 'bcrypt'

import { User } from '../../../models'
import { LoginCredentials, AuthenticationResult, ReadQueryResult, User as UserType } from '../../../types'
import { camelify } from '../../util'

const authenticateLoginCredentials = async (loginCredentials: LoginCredentials): Promise<AuthenticationResult> => {
  const authenticationResult: AuthenticationResult = {
    success: false,
    sessionUser: null,
    error: "Email and Password do not match."
  }

  const userFetchResult: ReadQueryResult = await User.fetchViaEmail(loginCredentials.email)

  if (userFetchResult.error) {
    authenticationResult.error = userFetchResult.error
  } else if (userFetchResult.data) {
    const fetchedUser: UserType = camelify(userFetchResult.data[0])
    const passwordValid: boolean = await new Promise((resolve) => {
      bcrypt.compare(loginCredentials.password, fetchedUser.password, (_, result) => {
        resolve(result)
      })
    })

    delete fetchedUser.password

    const sessionUser = { ... fetchedUser, shopName: null }

    if (passwordValid) {
      authenticationResult.success = true
      authenticationResult.sessionUser = sessionUser
      authenticationResult.error = null
    }
  }

  return authenticationResult
}

export default authenticateLoginCredentials

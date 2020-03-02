import { LoginCredentials, AuthenticationResult, Flash, SessionUser, ReadQueryResult } from '../../../types'
import { Shop } from '../../../models'
import authenticateLoginCredentials from './authenticateLoginCredentials'

const logUserIn = async (req, res) => {
  const loginCredentials: LoginCredentials = req.body
  const authenticationResult: AuthenticationResult = await authenticateLoginCredentials(loginCredentials)

  if (authenticationResult.success) {
    const sessionUser: SessionUser = authenticationResult.sessionUser

    if (sessionUser.shopId) {
      const shopQueryResult: ReadQueryResult = await Shop.fetchViaId(sessionUser.shopId)

      if (!shopQueryResult.error) {
        const shop = shopQueryResult.data[0]

        sessionUser.shopName = shop.name
      }
    }

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

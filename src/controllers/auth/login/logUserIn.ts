import { LoginCredentials } from '../../../types'

const logUserIn = (req, res) => {
  const loginCredentials: LoginCredentials = req.body

  // authenticate

  // if valid
  // create session
  // else
  // render errors


  res.json(loginCredentials)
}

export default logUserIn

import LoginCredentials from './LoginCredentials'

type UserSignupResult = {
  success: boolean,
  loginCredentials: LoginCredentials,
  error: string,
}

export default UserSignupResult

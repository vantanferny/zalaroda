import LoginCredentials from './LoginCredentials'

type UserSignUpResult = {
  success: boolean,
  loginCredentials: LoginCredentials,
  error: string,
}

export default UserSignUpResult

import SessionUser from "./sessionUser"

type AuthenticationResult = {
  success: boolean,
  sessionUser: SessionUser,
  error: string,
}

export default AuthenticationResult

type UserSignupInput = {
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string,
  password: string,
}

type ParsedUserSignupInput = {
  name: string,
  email: string,
  mobileNumber: string,
  password: string,
}

export {
  UserSignupInput,
  ParsedUserSignupInput,
}

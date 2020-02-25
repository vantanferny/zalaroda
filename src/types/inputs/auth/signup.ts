type UserSignUpInput = {
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string,
  password: string,
}

type ParsedUserSignUpInput = {
  name: string,
  email: string,
  mobileNumber: string,
  password: string,
}

export {
  UserSignUpInput,
  ParsedUserSignUpInput,
}

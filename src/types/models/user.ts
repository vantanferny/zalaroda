type User = {
  id: number,
  name: string,
  mobileNumber: string,
  email: string,
  password: string,
  isAdmin: boolean,
  isOwner: boolean,
  shopId: number,
  cart: object,
}

export default User

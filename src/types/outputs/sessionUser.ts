type SessionUser = {
  id: number,
  name: string,
  isAdmin: boolean,
  isOwner: boolean,
  shopId: number,
  cart: object,
}

export default SessionUser

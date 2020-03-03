type SessionUser = {
  id: number,
  name: string,
  isAdmin: boolean,
  isOwner: boolean,
  shopId: number,
  shopName: string,
  cart: object,
}

export default SessionUser

import { Shop } from '../models'

type ShopReadQueryResult = {
  data: Array<Shop>,
  error: string,
}

export default ShopReadQueryResult

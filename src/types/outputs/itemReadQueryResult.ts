import { Item } from '../models'

type ItemReadQueryResult = {
  data: Array<Item>,
  error: string,
}

export default ItemReadQueryResult

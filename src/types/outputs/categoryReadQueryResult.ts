import { Category } from '../models'

type CategoryReadQueryResult = {
  data: Array<Category>,
  error: string,
}

export default CategoryReadQueryResult

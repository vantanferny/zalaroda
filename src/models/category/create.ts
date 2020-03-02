import { Pool } from 'pg'

import { WriteQueryResult, Category } from '../../types'

const create = async (category: Category): Promise<WriteQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const categoryQueryResult: WriteQueryResult =  {
    success: true,
    error: null,
  }

  const res = await pool.query(
    `INSERT INTO
      categories
        (
          name,
          slug
        )
      VALUES
        (
          '${category.name}',
          '${category.slug}'
        )`
  ).catch(error => {
    return error
  })

  if (res.code) {
    categoryQueryResult.success = false
    categoryQueryResult.error = res.code
  }

  return categoryQueryResult
}

export default create

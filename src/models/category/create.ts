import { Pool } from 'pg'

import { QueryResult } from '../../types'

const create = async (category): Promise<QueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const categoryQueryResult: QueryResult =  {
    success: true,
    error: null
  }

  const res = await pool.query(
    `INSERT INTO
      categories
        (name)
      VALUES
        ('${category.name}')`
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

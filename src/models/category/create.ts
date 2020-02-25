import { Pool } from 'pg'

import { WriteQueryResult } from '../../types'

const create = async (category): Promise<WriteQueryResult> => {
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

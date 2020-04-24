import { Pool } from 'pg'

import { ReadQueryResult } from '../../types'

const fetchViaCategory = async (categoryID: number): Promise<ReadQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query(
    `
      SELECT
        id, name, slug
      FROM
        shops
      WHERE
        category_id = '${categoryID}'
    `
  ).catch(error => {
    return error
  })

  let shopReadQueryResult: ReadQueryResult

  if (res.code) {
    shopReadQueryResult = {
      data: [],
      error: res.code
    }
  } else {
    shopReadQueryResult = {
      data: res.rows,
      error: null
    }
  }

  return shopReadQueryResult
}

export default fetchViaCategory

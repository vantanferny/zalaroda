import { Pool } from 'pg'

import { ReadQueryResult } from '../../types'

const fetchViaSlug = async (shopSlug: string): Promise<ReadQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query(
    `
      SELECT
        id, name, slug, category_id
      FROM
        shops
      WHERE
        slug = '${shopSlug}'
      LIMIT
        1
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

export default fetchViaSlug

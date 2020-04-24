import { Pool } from 'pg'

import { ItemReadQueryResult } from '../../types'

const fetchViaSlug = async (itemSlug: string): Promise<ItemReadQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query(
    `
      SELECT
        *
      FROM
        items
      WHERE
        slug = '${itemSlug}'
    `
  ).catch(error => {
    return error
  })

  let itemReadQueryResult: ItemReadQueryResult

  if (res.code) {
    itemReadQueryResult = {
      data: [],
      error: res.code
    }
  } else {
    itemReadQueryResult = {
      data: res.rows,
      error: null
    }
  }

  return itemReadQueryResult
}

export default fetchViaSlug

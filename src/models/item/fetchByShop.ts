import { Pool } from 'pg'

import { ItemReadQueryResult } from '../../types'

const fetchByShop = async (shopId: number): Promise<ItemReadQueryResult> => {
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
        shop_id = '${shopId}'
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

export default fetchByShop

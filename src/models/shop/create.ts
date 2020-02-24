import { Pool } from 'pg'

import { QueryResult } from '../../types'

const create = async (shop): Promise<QueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const shopQueryResult: QueryResult =  {
    success: true,
    error: null
  }

  const res = await pool.query(
    `INSERT INTO
      shops
        (
          name,
          slug,
          category_id
        )
      VALUES
        (
          '${shop.name}',
          '${shop.slug}',
          '${shop.category_id}'
        )`
  ).catch(error => {
    return error
  })

  if (res.code) {
    shopQueryResult.success = false
    shopQueryResult.error = res.code
  }

  return shopQueryResult
}

export default create

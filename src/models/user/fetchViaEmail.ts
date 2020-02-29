import { Pool } from 'pg'

import { ReadQueryResult } from '../../types'

const fetchViaEmail = async (email: string): Promise<ReadQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query(
    `
      SELECT
        id, name, is_admin, is_owner, shop_id, cart, password
      FROM
        users
      WHERE
        email = '${email}'
      LIMIT
        1
    `
  ).catch(error => {
    return error
  })

  let userReadQueryResult: ReadQueryResult

  if (res.code) {
    userReadQueryResult = {
      data: [],
      error: res.code
    }
  } else {
    userReadQueryResult = {
      data: res.rows,
      error: null
    }
  }

  return userReadQueryResult
}

export default fetchViaEmail

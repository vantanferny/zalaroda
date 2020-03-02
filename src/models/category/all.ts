import { Pool } from 'pg'

import { ReadQueryResult } from '../../types'

const all = async (): Promise<ReadQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query('SELECT * from categories').catch((error)=> {
    return error
  })

  let categoryQueryResult: ReadQueryResult

  if (res.code) {
    categoryQueryResult = {
      data: [],
      error: res.code
    }
  } else {
    categoryQueryResult =  {
      data: res.rows,
      error: null
    }
  }

  return categoryQueryResult
}

export default all
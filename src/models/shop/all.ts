import { Pool } from 'pg'

const all = async () => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query('SELECT * from shops').catch((error)=> {
    return error
  })

  let shopQueryResult

  if (res.code) {
    shopQueryResult = {
      data: [],
      error: res.code
    }
  } else {
    shopQueryResult = {
      data: res.rows,
      error: null
    }
  }

  return shopQueryResult
}

export default all

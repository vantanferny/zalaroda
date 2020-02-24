import { Pool } from 'pg'

const create = async (category) => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const res = await pool.query(
    `INSERT INTO
      categories
        (name)
      VALUES
        ('${category.name}')`
  ).catch(error => {
      return error
  })

  let categoryQueryResult

  if (res.code) {
    categoryQueryResult = {
      success: false,
      error: res.code
    }
  } else {
    categoryQueryResult =  {
      success: true,
      error: null
    }
  }

  return categoryQueryResult
}

export default create

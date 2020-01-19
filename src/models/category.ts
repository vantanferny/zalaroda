import { Pool } from 'pg'

const connectionString = 'postgresql://anfernyvanta@localhost:5432/zalaroda_1'
const pool = new Pool({
  connectionString: connectionString,
})

const all = async () => {
  const res = await pool.query('SELECT * from categories').catch((error)=> {
    return error
  })

  let categoryQueryResult

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

const create = async (category) => {
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

export default { all, create }

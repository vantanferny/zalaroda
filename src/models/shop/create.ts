import { Pool } from 'pg'

const create = async (shop) => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

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

  let shopQueryResult

  if (res.code) {
    shopQueryResult = {
      success: false,
      error: res.code
    }
  } else {
    shopQueryResult =  {
      success: true,
      error: null
    }
  }

  return shopQueryResult
}

export default create

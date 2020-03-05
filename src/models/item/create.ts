import { Pool } from 'pg'

import { WriteQueryResult, Item } from '../../types'

const create = async (item: Item): Promise<WriteQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const itemQueryResult: WriteQueryResult =  {
    success: true,
    error: null
  }

  const res = await pool.query(
    `INSERT INTO
      items
        (
          shop_id,
          name,
          slug,
          description,
          price,
          stock,
          photo,
          is_active
        )
      VALUES
        (
          '${item.shop_id}',
          '${item.name}',
          '${item.slug}',
          '${item.description}',
          '${item.price}',
          '${item.stock}',
          '${item.photo}',
          '${item.is_active}'
        )`
  ).catch(error => {
    return error
  })

  if (res.code) {
    itemQueryResult.success = false
    itemQueryResult.error = res.code
  }

  return itemQueryResult
}

export default create

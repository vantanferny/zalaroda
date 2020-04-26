import { Pool } from 'pg'

import { WriteQueryResult, Item } from '../../types'

const update = async (item: Item): Promise<WriteQueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const itemQueryResult: WriteQueryResult =  {
    success: true,
    error: null
  }

  const res = await pool.query(
    `
      UPDATE
        items
      SET
        name = '${item.name}',
        slug = '${item.slug}',
        description = '${item.description}',
        price = '${item.price}',
        stock = '${item.stock}',
        photo = '${item.photo}',
        is_active = '${item.isActive}'
      WHERE
        id = '${item.id}'
    `
  ).catch(error => {
    return error
  })

  if (res.code) {
    itemQueryResult.success = false
    itemQueryResult.error = res.code
  }

  return itemQueryResult
}

export default update

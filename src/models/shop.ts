import { Pool } from 'pg'

import Item from './item'

const connectionString = 'postgresql://anfernyvanta@localhost:5432/zalaroda_1'
const pool = new Pool({
  connectionString: connectionString,
})

const all = async () => {
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
    shopQueryResult =  {
      data: res.rows,
      error: null
    }
  }

  return shopQueryResult
}

const create = async (shop) => {
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

const get = (id: number) => {
  const getShopItems = () => {
    const shopItems = Item.fetchByShop(id)

    return shopItems
  }

  const shop = {
    id: id,
    name: "SAMPLE SHOP GET",
    items: getShopItems
  }

  return shop
}

export default { all, get, create }

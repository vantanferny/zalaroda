import { Pool } from 'pg'

import Item from '../item'

const get = (id: number) => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

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

export default get

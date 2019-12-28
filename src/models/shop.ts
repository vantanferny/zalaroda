import Item from './item'

const all = () => {
  const sampleAll = [
    {
      id: 1,
      name: "NIKE SHOP"
    },
    {
      id: 2,
      name: "ADIDAS SHOP"
    }
  ]

  return sampleAll
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

export default { all, get }

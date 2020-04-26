import { Shop, Item } from '../../models'

import { Shop as ShopType, Item as ItemType } from '../../types'

const renderShopPage = async (req, res) => {
  const errors = []
  const shopFetchResult = await Shop.fetchViaSlug(req.params.shop_slug)
  const shop: ShopType  = shopFetchResult.data[0]

  const itemFetchResult = await Item.fetchByShop(shop.id)
  const items: Array<ItemType> = itemFetchResult.data

  if (shopFetchResult.error) errors.push(shopFetchResult.error)
  if (itemFetchResult.error) errors.push(itemFetchResult.error)

  if (errors.length > 0) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: errors[0]
      }
    )
  } else {
    const data = {
      shop: shop,
      items: items,
      user: req.session.user
    }

    res.render('customer/shop', data)
  }
}

export default renderShopPage

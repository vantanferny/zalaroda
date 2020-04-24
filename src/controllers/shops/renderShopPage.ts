import { Shop, Item } from '../../models'

import { Shop as ShopType, Item as ItemType } from '../../types'

const renderShopPage = async (req, res) => {
  const { data: shopFetchResult } = await Shop.fetchViaSlug(req.params.shop_slug)
  const shop: ShopType  = shopFetchResult[0]

  const { data: itemFetchResult } = await Item.fetchByShop(shop.id)
  const items: Array<ItemType> = itemFetchResult

  res.render('customer/shop', {shop: shop, items: items})
}

export default renderShopPage

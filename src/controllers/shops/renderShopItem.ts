import { Item } from '../../models'

const renderShopItem = async (req, res) => {
  const itemFetchResult = await Item.fetchViaSlug(req.params.item_slug)
  const item = itemFetchResult.data[0]

  res.render('customer/item', { item: item })
}

export default renderShopItem

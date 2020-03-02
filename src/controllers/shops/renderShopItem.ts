import { Item } from '../../models'

const renderShopItem = (req, res) => {
  const itemId = req.params.item_id
  const item = Item.get(itemId)

  res.render('customer/item', {item: item})
}

export default renderShopItem

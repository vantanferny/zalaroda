import { Item } from '../../models'

const renderShopItem = async (req, res) => {
  const errors = []

  const itemFetchResult = await Item.fetchViaSlug(req.params.item_slug)
  const item = itemFetchResult.data[0]
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
      item: item,
      user: req.session.user,
    }

    res.render('customer/item', data)
  }
}

export default renderShopItem

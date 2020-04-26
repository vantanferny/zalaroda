import { Item } from '../../models'
import { Item as ItemType, ReadQueryResult, SessionUser } from '../../types'
import { camelify } from '../util'

const renderViewItemPage = async (req, res) => {
  if (req.session.user && req.session.user.isOwner && req.session.user.shopId) {
    const errors: Array<string> = []
    const user: SessionUser = req.session.user
    const itemFetchResult: ReadQueryResult = await Item.fetchViaSlug(req.params.item_slug)
    const item: ItemType = camelify(itemFetchResult.data[0])

    if (itemFetchResult.error) errors.push(itemFetchResult.error)
    if (item.shopId != req.session.user.shopId) errors.push("Unauthorized Access.")

    if (errors.length > 0) {
      res.status(504)
      res.render('util/error',
        {
          title: '504: Gateway Timeout',
          message: errors[0]
        }
      )
    } else {
      res.render('owner/inventory/view', { item: item, user: user })
    }
  } else {
    res.render('util/error',
    {
      title: "Page Unavailable",
      message: "Shop not found."
    })
  }
}

export default renderViewItemPage

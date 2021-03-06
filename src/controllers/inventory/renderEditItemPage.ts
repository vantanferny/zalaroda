import { Item } from '../../models'
import { Item as ItemType, ReadQueryResult, SessionUser } from '../../types'
import { camelify } from '../util'

const renderEditItemPage = async (req, res) => {
  if (req.session.user && req.session.user.isOwner && req.session.user.shopId) {
    const errors: Array<string> = []
    const user: SessionUser = req.session.user
    const itemFetchResult: ReadQueryResult = await Item.fetchViaSlug(req.params.item_slug)
    const item: ItemType = camelify(itemFetchResult.data[0])

    if (itemFetchResult.error) errors.push(itemFetchResult.error)
    if (item.shopId != req.session.user.shopId) errors.push("Unauthorized Access.")

    res.render('owner/inventory/edit', { user: user, item: item })
  } else {
    res.render('util/error',
    {
      title: "Page Unavailable",
      message: "Shop not found"
    })
  }
}

export default renderEditItemPage

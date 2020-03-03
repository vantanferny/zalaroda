import { Item } from '../../models'
import { SessionUser } from '../../types'

const renderShopItems = async (req, res) => {
  const user: SessionUser = req.session.user

  if (user.isOwner && user.shopId) {
    const { data: items, error } = await Item.fetchByShop(user.shopId)

    if (error) {
      res.render('util/error', {
        title: "Page Unavailable",
        message: "Error fetching Items."
      })
    } else {
      res.render('admin/inventory', {
        items: items,
        user: req.session.user,
      })
    }
  } else {
    res.render('util/error', {
      title: "Page Unavailable",
      message: "Access Denied."
    })
  }
}

export default renderShopItems

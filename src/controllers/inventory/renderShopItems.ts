import { Item } from '../../models'
import { SessionUser } from '../../types'
import { camelify } from '../util'

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
        const parsedItems = items.map((item)=> {
          return camelify(item)
        })

        res.render('owner/inventory', {
        items: parsedItems,
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

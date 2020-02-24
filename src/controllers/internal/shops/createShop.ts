import { slugifier } from '../../util'

import { Shop } from '../../../models'

const createShop = async (req, res) => {
  const name = req.body.name
  const slug = slugifier(req.body.name)
  const category_id = req.body.category_id
  const shop = {
    name: name,
    slug: slug,
    category_id: category_id
  }

  const { success, error } = await Shop.create(shop)

  if (success) {
    res.redirect('/internal/shops') // add message
  } else {
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  }
}

export default createShop

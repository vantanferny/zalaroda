import { slugifier } from '../util'

import { Item } from '../../models'
import { Item as ItemType } from '../../types'

const createItem = async (req, res) => {
  const item: ItemType = req.body

  item.slug = slugifier(item.name)
  item.is_active = item.is_active ? true : false

  // const { success, error } = await Item.create(item)

  res.json(item)

  // if (success) {
  //   res.redirect('/internal/shops') // add message
  // } else {
  //   res.render('util/error',
  //     {
  //       title: '504: Gateway Timeout',
  //       message: error
  //     }
  //   )
  // }
}

export default createItem

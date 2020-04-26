import { slugifier } from '../util'

import { Item } from '../../models'
import { Item as ItemType, Flash } from '../../types'

const updateItem = async (req, res) => {
  const item: ItemType = req.body

  item.slug = slugifier(item.name)
  item.isActive = item.isActive ? true : false

  const { success, error } = await Item.create(item)

  if (success) {
    const flash: Flash = {
      type: 'success',
      message: 'Item successfully created.',
    }

    req.session.flash = flash

    res.redirect('/inventory')
  } else {
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  }
}

export default updateItem

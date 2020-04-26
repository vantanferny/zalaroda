import { Item } from '../../models'
import { Item as ItemType, Flash } from '../../types'

const updateItem = async (req, res) => {
  const item: ItemType = req.body
  const { success, error } = await Item.update(item)

  if (success) {
    const flash: Flash = {
      type: 'success',
      message: 'Item successfully updated.',
    }

    req.session.flash = flash

    res.redirect(`/inventory/view/${item.slug}`)
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

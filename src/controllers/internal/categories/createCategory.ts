import { Category } from '../../../models'
import { Category as CategoryType } from '../../../types'
import { slugifier } from '../../util'

const createCategory = async (req, res) => {
  const category: CategoryType = {
    id: null,
    name: req.body.name,
    slug: slugifier(req.body.name)
  }

  const { success, error } = await Category.create(category)

  if (success) {
    res.redirect('/internal/categories') // add message
  } else {
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  }
}

export default createCategory

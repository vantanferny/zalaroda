import { Category } from '../../../models'

const createCategory = async (req, res) => {
  const name = req.body.name
  const category = {name: name} //typescript this shit

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

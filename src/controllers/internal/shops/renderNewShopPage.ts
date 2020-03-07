import { Category } from '../../../models'

const renderNewShopPage = async (req, res) => {
  const {data: categories, error } = await Category.all()

  if (error) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  } else {
    res.render('internal/shops/new', { categories: categories, user: req.session.user })
  }
}

export default renderNewShopPage

import { Category, Shop } from '../../models'
import { Category as CategoryType } from '../../types'

const renderCategoryPage = async (req, res) => {
  const errors = []
  const categoryFetchResult = await Category.fetchViaSlug(req.params.categorySlug)
  const category: CategoryType = categoryFetchResult.data[0]
  const shopFetchResult = await Shop.fetchViaCategory(category.id)

  if (categoryFetchResult.error) errors.push(categoryFetchResult.error)
  if (shopFetchResult.error) errors.push(shopFetchResult.error)

  if (errors.length > 0) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: errors[0]
      }
    )
  } else {
    const data = {
      category: category.name,
      user: req.session.user,
      shops: shopFetchResult.data,
    }

    res.render('customer/category', data)
  }
}

export default renderCategoryPage

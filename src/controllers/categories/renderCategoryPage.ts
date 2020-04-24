import { Category, Shop } from '../../models'
import { Category as CategoryType } from '../../types'

const renderCategoryPage = async (req, res) => {
  const { data: categoryFetchResult} = await Category.fetchViaSlug(req.params.categorySlug)
  const category: CategoryType  = categoryFetchResult[0]
  const { data: shops } = await Shop.fetchViaCategory(category.id)

  const data = {
    category: category.name,
    user: req.session.user,
    shops: shops,
  }

  res.render('customer/category', data)
}

export default renderCategoryPage

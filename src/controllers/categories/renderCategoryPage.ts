import { Category } from '../../models'

const renderCategoryPage = async (req, res) => {
  res.render('customer/category', { category: req.params.categorySlug, user: req.session.user })
}

export default renderCategoryPage

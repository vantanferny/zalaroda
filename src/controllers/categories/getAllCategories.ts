import { Category } from '../../models'

const getAllCategories = async (req, res) => {
  const { data: categories, categoryError } = await Category.all()

  res.render('customer/categories', {categories: categories})
}

export default getAllCategories

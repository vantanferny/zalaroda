import { Category, Shop } from '../../models'

const renderHomeData = async (req, res) => {
  const errors = []
  const { data: categories, categoryError } = await Category.all()
  const { data: shops, shopError } = await Shop.all()

  if (categoryError) errors.push(categoryError)
  if (shopError) errors.push(shopError)

  if (errors.length > 0) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: errors[0]
      }
    )
  } else {
    const message = res.locals.flash ? res.locals.flash.message : null

    res.render('home', {
      categories: categories,
      shops: shops,
      message: message,
    })
  }
}

export default renderHomeData

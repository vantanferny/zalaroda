import { Shop } from '../../../models'

const getAllShops = async (req, res) => {
  const {data: shops, error } = await Shop.all()

  if (error) {
    res.status(504)
    res.render('util/error',
      {
        title: '504: Gateway Timeout',
        message: error
      }
    )
  } else {
    res.render('internal/shops', {shops: shops})
  }
}

export default getAllShops

import { Shop } from '../../models'

const renderShopPage = (req, res) => {
  const shopSlug = req.params.shop_slug
  const shop = Shop.get(shopSlug)

  res.render('customer/shop', {shop: shop})
}

export default renderShopPage

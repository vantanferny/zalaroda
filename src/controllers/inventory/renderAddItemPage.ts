const renderAddItemPage = async (req, res) => {
  if (req.session.user && req.session.user.isOwner && req.session.user.shopId) {
    const user = req.session.user

    res.render('owner/inventory/add', { user: user })
  } else {
    res.render('util/error',
    {
      title: "Page Unavailable",
      message: "Shop not found"
    })
  }
}

export default renderAddItemPage

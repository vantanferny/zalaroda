const renderNewCategoryPage = (req, res) => {
  res.render('internal/categories/new', { user: req.session.user })
}

export default renderNewCategoryPage

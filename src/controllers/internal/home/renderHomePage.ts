const renderHomePage =  (req, res) => {
  res.render('internal/home', { user: req.session.user })
}

export default renderHomePage

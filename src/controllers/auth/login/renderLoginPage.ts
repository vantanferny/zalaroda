const renderLoginPage = (req, res) => {
  res.render('auth/login', {
    params: res.locals.params,
    flash: res.locals.flash,
  })
}

export default renderLoginPage

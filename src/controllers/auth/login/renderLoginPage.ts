const renderLoginPage = (req, res) => {
  if (req.session.user) {
    res.render('util/error',
    {
      title: "Page Unavailable",
      message: "User already logged in"
    })
  } else {
    res.render('auth/login', {
      params: res.locals.params,
      flash: res.locals.flash,
      user: null,
    })
  }
}

export default renderLoginPage

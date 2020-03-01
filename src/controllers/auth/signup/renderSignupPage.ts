const renderSignupPage = (req, res) => {
  if (req.session.user) {
    res.render('util/error',
    {
      title: "Page Unavailable",
      message: "User already logged in"
    })
  } else {
    res.render('auth/signup', {
      params: res.locals.params,
      flash: res.locals.flash,
      user: null,
    })
  }
}

export default renderSignupPage

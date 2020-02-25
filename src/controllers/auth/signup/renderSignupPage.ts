const renderSignupPage = (req, res) => {
  res.render('auth/signup', { params: null, errors: null })
}

export default renderSignupPage

const renderLoginPage = (req, res) => {
  res.render('auth/login', { params: null, errors: null })
}

export default renderLoginPage

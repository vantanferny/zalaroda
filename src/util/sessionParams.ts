const sessionParams = (req, res, next) => {
  res.locals.params = req.session.params
  delete req.session.params

  next()
}

export default sessionParams

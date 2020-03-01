const sessionFlash = (req, res, next) => {
  res.locals.flash = req.session.flash
  delete req.session.flash

  next()
}

export default sessionFlash

const logUserOut = (req, res) => {
  req.session.destroy()

  res.redirect('/')
}

export default logUserOut


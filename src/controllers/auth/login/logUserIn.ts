const logUserIn = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const userInput = {
    email: email,
    password: password,
  }

  res.json(userInput)
}

export default logUserIn

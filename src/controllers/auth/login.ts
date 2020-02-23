import express from 'express'

const login = express.Router()

login.get('/', (req, res) => {
  res.render('auth/login')
})

login.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const userInput = {
    email: email,
    password: password,
  }

  res.json(userInput)
})

export default login

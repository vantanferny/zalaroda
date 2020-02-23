import express from 'express'

const signup = express.Router()

signup.get('/', (req, res) => {
  res.render('auth/signup')
})

signup.post('/', (req, res) => {
  const email: string = req.body.email
  const firstName: string = req.body.first_name.trim()
  const lastName: string = req.body.last_name.trim()
  const name: string = firstName + " " + lastName
  const mobileNumber: string = req.body.mobile_number
  const password: string = req.body.password

  const userInput = {
    email: email,
    password: password,
    name: name,
    mobileNumber: mobileNumber,
  }

  res.json(userInput)
})

export default signup

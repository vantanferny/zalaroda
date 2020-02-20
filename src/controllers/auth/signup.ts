import express from 'express'

const signup = express.Router()

signup.get('/', (req, res) => {
  res.render('auth/signup')
})

export default signup

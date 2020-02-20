import express from 'express'

const login = express.Router()

login.get('/', (req, res) => {
  res.render('auth/login')
})

export default login

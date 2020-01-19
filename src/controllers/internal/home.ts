import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('internal/home')
})

export default router

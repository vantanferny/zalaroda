import express from 'express'

const analytics = express.Router()

analytics.get('/', (req, res) => {
    res.render('admin/dashboard')
})

export default analytics

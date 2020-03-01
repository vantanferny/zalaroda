import express from 'express'
import bodyParser from 'body-parser'

import controllers from './controllers'
import { initializeEnvironment, initializedSession, sessionFlash } from './util'

const app = express()
const PORT = process.env.PORT || 3000

initializeEnvironment()

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(initializedSession)
app.use(sessionFlash)
app.use(controllers)

app.listen(PORT, () => {
  console.log(`🚀 🚀 🚀 Server is running in http://localhost:${PORT} 🚀 🚀 🚀`)
})

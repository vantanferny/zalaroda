import express from 'express'
import bodyParser from 'body-parser'
import controllers from './controllers'
import {
  initializeEnvironment,
  initializedSession,
  sessionFlash,
  sessionParams,
} from './util'

const app = express()
const PORT = process.env.PORT || 3000

initializeEnvironment()

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(initializedSession)
app.use(sessionFlash)
app.use(sessionParams)
app.use(controllers)
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(PORT, () => {
  console.log(`🚀 🚀 🚀 Server is running in http://localhost:${PORT} 🚀 🚀 🚀`)
})

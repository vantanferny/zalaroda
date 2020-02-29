import express from 'express'

import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

import bodyParser from 'body-parser'

import controllers from './controllers'
import { initializeEnvironment } from './util'

const app = express()
const PORT = process.env.PORT || 3000

const redisClient = redis.createClient()
const redisStore = connectRedis(session)
const sessionOptions = {
  secret: 'secret',
  name: 'zalaroda_cookie',
  resave: false, // false since we normally touch the cart
  saveUninitialized: false, // false since it doesn't seem like it's needed
  cookie: { secure: false }, // Note that the cookie-parser module is no longer needed + no https yet
  store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
}

initializeEnvironment()

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(controllers)
app.use(session(sessionOptions))

app.listen(PORT, () => {
  console.log(`🚀 🚀 🚀 Server is running in http://localhost:${PORT} 🚀 🚀 🚀`)
})

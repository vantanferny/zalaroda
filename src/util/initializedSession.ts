import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

const redisClient = redis.createClient()
redisClient.on('error', (err) => {
  console.log('Redis error: ', err)
})

const redisStore = connectRedis(session)
const sessionOptions = {
  secret: 'secret',
  name: 'zalaroda_cookie',
  resave: false, // false since we normally touch the cart
  saveUninitialized: false, // false since it doesn't seem like it's needed
  cookie: { secure: false }, // Note that the cookie-parser module is no longer needed + no https yet
  store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
}

const initializedSession = session(sessionOptions)

export default initializedSession

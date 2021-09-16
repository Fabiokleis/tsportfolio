import express from 'express'
import UserRoute from './routes/UserRoute'
import dotenv from 'dotenv'

dotenv.config()

const PORT = Number(process.env.PORT)
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost:3000')
  res.header('Access-Control-Expose-Headers', 'Content-Type, Authorization, X-Total-Count, Origin')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin')
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')

  next()
})

app.use('/user', UserRoute)
app.use((err, res) => {
  res.status(err.statusCode || 500).send(err.statusMessage || 'internal server error! Try again later!')
})

app.listen(PORT, () => {
  console.log(`running on ${process.env.PORT} port!`)
}).on('error', (err) => { throw err })

import express from 'express'
import UserRoute from './routes/UserRoute'
import dotenv from 'dotenv'

dotenv.config()

const PORT = Number(process.env.PORT)
const app = express()

app.use('/user', UserRoute)
app.use((err, res) => {
  res.status(err.statusCode || 500).send(err.statusMessage || 'internal server error! Try again later!')
})

app.listen(PORT, () => {
  console.log(`running on ${process.env.PORT} port!`)
}).on('error', (err) => { throw err })

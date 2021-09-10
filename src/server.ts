import express from 'express'

const app = express()
const PORT = Number(process.env.PORT)

app.listen(PORT, () => {
  console.log('running on 3000 port!')
}).on('error', (err) => console.error(err))

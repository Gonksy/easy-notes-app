const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({'message': 'Welcome to EasyNotes.'})
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
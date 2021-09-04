const express = require('express')
const app = express()
const database = require('./config/database-connect')
const Client = require('./src/model/client')
require('dotenv').config()

database.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(process.env.PORT, () => {
  console.log(`app is running in port: ${process.env.PORT}`)
})

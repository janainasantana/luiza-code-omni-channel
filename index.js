const express = require('express')
const app = express()
const { Product, Client } = require('./src/models')





require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(process.env.PORT, () => {
  console.log(`app is running in port: ${process.env.PORT}`)
})


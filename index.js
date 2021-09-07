const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./src/routes/index')(app)
require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log(`app is running in port: ${process.env.PORT}`)
})

const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./src/routes/index')(app)
require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log(`App is running in http://${process.env.HOST}:${process.env.PORT}`)
  console.log(`Swagger is running in http://${process.env.HOST}:${process.env.PORT}/doc/#/`)
})

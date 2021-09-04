const Sequelize = require('sequelize')
require('dotenv').config()
const env = process.env

const sequelize = new Sequelize(
  env.DB_DATABASE,
  env.DB_USERNAME,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: env.DB_TYPE
  }
)

class Databaseconfig {
  connect = async () => {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  close = () => {
    sequelize.close()
  }
}

module.exports = new Databaseconfig()

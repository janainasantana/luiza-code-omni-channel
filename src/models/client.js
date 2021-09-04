module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  })

  return Client
}

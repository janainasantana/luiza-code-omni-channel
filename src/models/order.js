module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          status: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
          id_client: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          id_store: {
            type: DataTypes.INTEGER,
            allowNull: false
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
  
    return Order
  }
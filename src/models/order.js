module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_status: {
      type: DataTypes.INTEGER,
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
  },
    {
      tableName: 'Orders'
    }
  )

  Order.associate = models => {
    Order.belongsTo(models.Client);
    Order.belongsTo(models.Status);
    Order.belongsTo(models.Store);
  };

  return Order
}
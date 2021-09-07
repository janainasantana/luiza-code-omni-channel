module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define('OrderProduct', {
        id_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id'
            }
        },

        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id'
            }

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
            tableName: 'OrderProduct'
        })

    return OrderProduct
}

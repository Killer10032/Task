const { DataTypes } = require("sequelize")
const sequelize = require("./db")

module.exports = sequelize.define("Car",
    {
        "name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true,
    }
)
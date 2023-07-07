const sequelize = require("./db")
const { DataTypes } = require("sequelize")

module.exports = sequelize.define("User",
    {
        "name": {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
)
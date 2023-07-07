const { Sequelize } = require("sequelize")

//Установите root и killerqueen здесь на свое собственное имя пользователя и пароль базы данных.
const sequelize = new Sequelize("Task", "root", "killerqueen", {
    host: "localhost",
    dialect: "mysql",
    logging: null
})

module.exports = sequelize
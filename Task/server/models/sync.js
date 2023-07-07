require("./User")
require("./Car")

const sequelize = require("./db")
sequelize.sync({ alert: true }).then(() => {
    console.log("所有模型同步完成")
})
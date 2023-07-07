//设置模型关系
const User = require("./User")
const Car = require("./Car")
User.hasMany(Car)
Car.belongsTo(User)
const Mock = require("mockjs")

const result = Mock.mock({
    "data|20-50": [
        {
            name: "@name",
            number: /\d{9}/,
            "price|10000-100000": 12000,
            "UserId|1-27": 1
        }
    ]
}).data
console.log(result)
const Car = require("../models/Car")
Car.bulkCreate(result)
console.log(1);
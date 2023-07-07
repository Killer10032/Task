const Mock = require("mockjs")

const result = Mock.mock({
    "data|20-50": [
        {
            name: "@name",
            "age|18-40": 20,
            "sex|1-2": true,
        }
    ]
}).data
// console.log(result)
const User = require("../models/User")
User.bulkCreate(result)
// console.log(1);
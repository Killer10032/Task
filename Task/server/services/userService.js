const User = require("../models/User");

exports.getUserById = async function (id) {
    const result = await User.findByPk(id)
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getUserAll = async function () {
    const result = await User.findAll()
    return JSON.parse(JSON.stringify(result))
}
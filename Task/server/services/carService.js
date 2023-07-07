const Car = require("../models/Car");

exports.getCarById = async function (id) {
    const result = await Car.findByPk(id);
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getCarByUserIdAll = async function (id) {
    console.log(1)
    const result = await Car.findAll({
        where: {
            UserId: id
        }
    })
    console.log(result);
    return JSON.parse(JSON.stringify(result))
}

exports.getCarAll = async function () {
    const result = await Car.findAll()
    return JSON.parse(JSON.stringify(result))
}
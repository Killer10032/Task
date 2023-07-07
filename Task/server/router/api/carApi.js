const express = require('express');
const router = express.Router()
const { asyncHandler } = require("../getSendResult")
const CarSer = require("../../services/carService")

router.get(
    "/",
    asyncHandler(async (req) => {
        return await CarSer.getCarAll()
    })
)

router.get(
    "/:id",
    asyncHandler(async (req) => {
        return await CarSer.getCarById(req.params.id)
    })
)

router.get(
    "/userId/:id",
    asyncHandler(async (req) => {
        return await CarSer.getCarByUserIdAll(req.params.id)
    })
)

module.exports = router
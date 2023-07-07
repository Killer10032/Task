const express = require('express')
const router = express.Router()
const UserSer = require("../../services/userService")
const { getSendResult, asyncHandler } = require("../getSendResult")

//获取用户
router.get(
    "/",
    asyncHandler(async (req) => {
        return await UserSer.getUserAll()
    })
)

router.get(
    "/:id",
    asyncHandler(async (req) => {
        return await UserSer.getUserById(req.params.id)
    })
)



module.exports = router
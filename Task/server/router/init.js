const express = require('express');
const cors = require('cors');

const app = express();

const port = 8888
app.listen(port, () => {
    console.log(`端口${port}正在监听`);
})

//处理跨域
app.use(
    cors(
        {
            origin(origin, callback) {
                if (!origin) {
                    callback(null, "*")
                    return
                }
                callback(null, origin)
            },
            credentials: true
        }
    )
)

//处理api请求
app.use("/api/user", require("./api/userApi"))
app.use("/api/car", require("./api/carApi"))

app.use(require("./errorMiddleware"))
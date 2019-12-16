const express = require('express')
const app = express()
// 解析json
app.use(express.json())

//跨域
app.use(require('cors')())


// 数据库
require('./plugins/db')(app)

// 路由
require('./routes/index')(app)

app.listen(4000, () => console.log('app listening on port 4000!'))
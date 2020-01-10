const express = require('express')
const app = express()
// 解析json
app.use(express.json())

app.set('secret', 'wquiaggfaoj4561')
//跨域
app.use(require('cors')())

// 静态
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/public/admin'))
app.use('/', express.static(__dirname + '/public/web'))

// 数据库
require('./plugins/db')(app)

// 路由
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(4000, () => console.log('app listening on port 4000!'))
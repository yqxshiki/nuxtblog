//连接数据库
module.exports = app => {
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://localhost:27017/nuxtblog', {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
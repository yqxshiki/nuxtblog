const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false,
        // 加密
        set(val) {
            return require("bcryptjs").hashSync(val, 10)
        }
    }
})

module.exports = mongoose.model('Admin', schema, 'admins')
const mongoose = require("mongoose")
// 文章模型
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    items: [{
        image: {
            type: String
        },
        url: {
            type: String
        }
    }],
})

module.exports = mongoose.model('Img', schema, 'imgs')
const mongoose = require("mongoose")
// 文章模型
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    bodyrender: {
        type: String
    },
    date: {
        type: String
    },
    lastdate: {
        type: String
    },
    count: {
        type: Number
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
})

module.exports = mongoose.model('Acticle', schema)
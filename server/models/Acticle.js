const mongoose = require("mongoose")
// 文章模型
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    icon:{
        type:String
    },
    bodyrender: {
        type: String
    },
    count: {
        type: Number
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('Acticle', schema)
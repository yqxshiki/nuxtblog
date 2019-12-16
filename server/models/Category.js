const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parents: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
    },
})
module.exports = mongoose.model('Category', schema)
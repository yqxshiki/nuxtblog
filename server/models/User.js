const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String
    },
    describe: {
        type: String
    },
    icon: {
        type: String
    },
    gitlink: {
        type: String
    },
    qqlink: {
        type: String
    }

})

module.exports = mongoose.model('User', schema)
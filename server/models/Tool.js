const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    link: {
        type: String
    },
    icon: {
        type: String
    }
})


module.exports = mongoose.model("Tool", schema, 'tools')
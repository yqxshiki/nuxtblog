const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    link: {
        type: String
    },
    type: {
        type: String
    }
})

module.exports = mongoose.model("Fslink", schema, 'fslinks')
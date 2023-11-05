const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    temperature : Number,
    time: String
})

module.exports = mongoose.model("weatherdata", dataSchema);
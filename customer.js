const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender:String,
})

module.exports = mongoose.model("Customer",CustomerSchema)
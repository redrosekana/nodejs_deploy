const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URL_DB,{
    useNewUrlParser:true
}).catch(err=>console.log(err))

const CustomerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender:String,
})

module.exports = mongoose.model("Customer",CustomerSchema)
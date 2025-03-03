
const mongoose = require("mongoose")

const menuSchema = mongoose.Schema({
    dish:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    
})


module.exports = mongoose.model('menu',menuSchema)
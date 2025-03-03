const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    item:{
        type:[String],
        required:true
    }
})


module.exports = mongoose.model('restaurant',restaurantSchema)
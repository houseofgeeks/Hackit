const mongoose=require('mongoose')
const otpModel=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true

    }
})
const Otp=mongoose.model('Otp',otpModel)
module.exports=Otp

import mongoose from "mongoose";

const userschema = mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("Users",userschema)

export default userModel
import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        index: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar:{
        type: String,//cloudinary url
        required: true,
        unique: true,
    },
    cover:{
        type: String,
    },
    watchHistory:
    [
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:
    {
        type:string,
        required: [true, 'Password is Required']
    },
    refreshtoken:
    {
        type: String,

    }

},{
    timestamps:true
})


userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.ispasswordcorrect = async function(password)
{
   return bcrypt.compare(password , this.password)
}

userSchema.methods.generateAcessToken = function(){
    jwt.sign(
        {
            _id: this.
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    
}

export const User = mongoose.model("User",userSchema)
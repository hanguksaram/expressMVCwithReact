import {mongoose} from '../db/mongoose'
import { networkInterfaces } from 'os';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config').get(process.env.NODE_ENV)
const SALT_I = 10

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        required: true,
    
    },
    name: {
        type: String,
        maxlength: 100
    },
    lastName: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
})

userSchema.pre('save', function(next) {
    const user = this
    const password = user.password
    if(user.isModified('password')){
       bcrypt.hash(password, SALT_I)
        .then((hash) => {
            user.password = hash
            next()
        }, (e) => {return Promise.reject(e)})
    } else {
        next()
    }
})


userSchema.methods.comparePasswords = function(password) {
    const user = this
    return new Promise((resolve, reject) =>
    {   
        bcrypt.compare(password ,user.password, (err, res) => {
            if (res) resolve(res)
                else reject(err || 'Passwords dont match')
        })
    })
}
   
userSchema.methods.generateToken = function () {
    
    const user = this
    const token = jwt.sign(user._id.toHexString(), config.SECRET)
    user.token = token
    return user.save()
           
    
}

userSchema.methods.deleteToken = function () {
    const user = this

    return user.update({$unset: {token: 1}})
}
    
userSchema.statics.findByToken = function (token) {
    const user = this

    return new Promise((resolve, reject) => {
        jwt.verify(token, config.SECRET, (err, decode) => {  
        if (err) reject(err)
            resolve(user.findOne({"_id": decode, "token": token})
            )
        })
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }
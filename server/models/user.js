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
   
    
    
    


const User = mongoose.model('User', userSchema)

module.exports = { User }
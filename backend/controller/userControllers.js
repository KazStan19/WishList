const asyncHandler = require("express-async-handler")
const user = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const genToken = (id) =>{

    return jwt.sign({id}, process.env.JWT_SECRET,{

        expiresIn:'30d'

    })

}

const registerUser = asyncHandler( async(req,res)=>{

    const {username, email, password} = req.body;

    if(!username || !email || !password){

        res.status(400)
        throw new Error('Please fill in all fields')

    }

    const userExist = await user.findOne({email})
    if(userExist){

        res.status(400)
        throw new Error('User already exists')

    }

    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password,salt)

    const User = await user.create({

        username,
        email,
        password:hasedPassword

    })

    if(User){

        res.status(201).json({

            _id: User.id,
            username: User.username,
            email: User.email,
            token: genToken(User._id)

        })

    }else{

        res.status(400)
        throw new Error('Invalid user data')

    }

})

const loginUser = asyncHandler( async(req,res)=>{

    const {email,password} = req.body

    const User = await user.findOne({email})

    if(User && (await bcrypt.compare(password,User.password))){

        res.json({

            _id: User.id,
            username: User.username,
            email: User.email,
            token: genToken(User._id)

        })

    }else{

        res.status(400)
        throw new Error('invalid credentials')

    }

})

const getUser = asyncHandler( async(req,res)=>{

    const {_id,username,email} = await user.findById(req.User.id)

    res.status(200).json({

        id:_id,
        username,
        email

    })

})

module.exports = {

    registerUser,
    loginUser,
    getUser

}
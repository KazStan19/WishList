const asyncHandler = require("express-async-handler")
const wishes = require('../models/wishModels')
const user = require('../models/userModel')

const getWishes = asyncHandler( async (req,res) => {

    const Wishes = await wishes.find({user:req.user.id})

    res.status(200).json(Wishes)

})

const postWishes = asyncHandler( async(req,res) => {

    if(!req.body.text){

        res.status(400)
        throw new Error("Please add a text field")

    }

    const Wishes = await wishes.create({

        text:req.body.text,
        user: req.body.id

    })

    res.status(200).json(Wishes)

})

const updateWishes = asyncHandler( async (req,res) => {

    const Wishes = await wishes.findById(req.params.id)

    if(!Wishes){

        res.status(400)
        throw new Error("Wish not found")

    }
    
    const User = await user.findById(req.body.id)

    if(!User){

        res.status(401)
        throw new Error("User not authorized")

    }

    if(Wishes.user.toString()!==User.id){

        res.status(401)
        throw new Error("User not authorized")

    }

    const updatedWishes = await wishes.findByIdAndUpdate( req.params.id,req.body,{

        new:true
        
    })

    res.status(200).json(updatedWishes)

})

const deleteWishes = asyncHandler( async (req,res) => {
    const Wishes = await wishes.findById(req.params.id)

    if(!Wishes){

        res.status(400)
        throw new Error("Wish not found")

    }

    const User = await user.findById(req.body.id)

    if(!User){

        res.status(401)
        throw new Error("User not authorized")

    }

    if(Wishes.user.toString() != User.id){

        res.status(401)
        throw new Error("User not authorized")

    }

    await Wishes.remove()

    res.status(200).json({id:req.params.id})

})

module.exports = {

    getWishes,
    postWishes,
    updateWishes,
    deleteWishes

}
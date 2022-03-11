const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username:{

        type:String,
        required:[true,'Please add a username']

    },
    email:{

        type:String,
        required:[true,'Please add a username'],
        unique:true

    },
    password:{

        type:String,
        required:[true,'Please add a username']

    },


},{

    timestamps:true

})

module.exports = mongoose.model("User",userSchema)
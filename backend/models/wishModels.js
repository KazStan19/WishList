const mongoose = require('mongoose')

const wishSchema = mongoose.Schema({

    text:{

        type:String,
        required: [true,'please add a text value']

    }
    
},
{

    timestamps:true

}

)

module.exports = mongoose.model("Wishes" , wishSchema)
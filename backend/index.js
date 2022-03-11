const express = require('express')
const dotenv = require("dotenv").config()
const connectDB = require("./config/mongoDB.config.js")
const { errorHandler } = require('./middleware/errorMiddleware.js')


const app = express()

let PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB();


app.use('/api/user',require('./routes/userRoutes.js'))
app.use('/api/wishes',require('./routes/wishRoutes.js'))

app.use(errorHandler)

app.listen(PORT,() =>{

    console.log(`Live server is on : ${PORT}`)

})

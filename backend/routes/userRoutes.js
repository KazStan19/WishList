const express = require("express")
const router = express.Router()
const {loginUser,registerUser,getUser} = require('../controller/userControllers.js')
const {protect} = require('../middleware/authMiddleware')

router.post('/login',loginUser)

router.post('/',registerUser)

router.get('/test',protect,getUser)


module.exports = router
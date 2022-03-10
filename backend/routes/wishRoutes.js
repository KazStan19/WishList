const express = require("express")
const router = express.Router()
const {getWishes,postWishes,updateWishes,deleteWishes} = require('../controller/wishCotrollers.js')

router.get('/',getWishes)

router.post('/',postWishes)

router.put('/:id',updateWishes)

router.delete('/:id',deleteWishes)

module.exports = router
const express = require("express")
const router = express.Router()
const {getWishes,postWishes,updateWishes,deleteWishes} = require('../controller/wishCotrollers.js')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getWishes,protect).post(postWishes,protect)

router.route('/:id').put(updateWishes,protect).delete(deleteWishes,protect)


module.exports = router
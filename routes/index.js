const userGameRouter = require('./userRouter')
const userBiodataRouter = require('./userBiodataRouter')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.use('/user-biodata', userBiodataRouter)
router.use('/user-game', userGameRouter)
module.exports = router
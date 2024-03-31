const express = require('express')
const router = express.Router()

const commands = require('./commands')

router.route('/createuser').post(commands.createUser)
router.route('/loginuser').post(commands.loginUser)
router.route('/borrow').post(commands.borrow)



module.exports = router
const router = require('express').Router()

const authController = require('../controllers/auth')
const auth = require('../middlewares/auth')

router.post('/', authController.authenticateUser)
router.get('/', auth, authController.authenticatedUser)

module.exports = router

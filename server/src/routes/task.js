const router = require('express').Router()
const { check } = require('express-validator')

const taskController = require('../controllers/task')
const auth = require('../middlewares/auth')

router.post('/', auth, [
  check('name', 'Name is required').not().isEmpty(),
  check('project', 'Project is required').isEmpty()
], taskController.createdTask)
router.get('/', auth, taskController.getTasks)
router.put('/:id', auth, taskController.updateTask)
router.delete(':/id', auth, taskController.deleteTask)

module.exports = router

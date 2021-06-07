const router = require('express').Router()
const { check } = require('express-validator')

const projectController = require('../controllers/project')
const auth = require('../middlewares/auth')

router.post('/', auth, [
  check('name', 'Name is required').not().isEmpty(),
  check('project', 'Project is required').isEmpty()
], projectController.createdProject)
router.get('/', auth, projectController.updateProject)
router.put('/:id', auth, [check('name', 'Name is required').not().isEmpty()], projectController.updateProject)
router.delete(':/id', auth, projectController.deleteProject)

module.exports = router

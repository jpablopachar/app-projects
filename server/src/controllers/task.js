const { validationResult } = require('express-validator')

const Task = require('../models/task')
const Project = require('../models/project')

exports.createdTask = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const { project } = req.body
    const projectExists = await Project.findById(project)

    if (!projectExists) return res.status(404).json({ message: 'Project not found' })
    if (projectExists.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    const task = new Task(req.body)

    await task.save()

    res.json({ task })
  } catch (error) {
    console.log(error)

    res.status(500).send('There was an error')
  }
}

exports.getTasks = async (req, res) => {
  try {
    const { project } = req.query
    const projectExists = await Project.findById(project)

    if (!projectExists) return res.status(404).json({ message: 'Project not found' })
    if (projectExists.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    const tasks = await Task.find({ project }).sort({ created: -1 })

    res.json({ tasks })
  } catch (error) {
    console.log(error)

    res.status(500).send('There was an error')
  }
}

exports.updateTask = async (req, res) => {
  try {
    const { project, name, state } = req.body
    let task = await Task.findById(req.params.id)

    if (!task) return res.status(404).json({ message: 'task not found' })

    const projectExists = await Project.findById(project)

    if (projectExists.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    const newTask = {}

    newTask.name = name
    newTask.state = state
    task = await Task.findByIdAndUpdate({ _id: req.params.id }, newTask, { new: true })

    res.json({ task })
  } catch (error) {
    console.log(error)

    res.status(500).send('There was an error')
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const { project } = req.query
    const task = await Task.findById(req.params.id)

    if (!task) return res.status(404).json({ message: 'task not found' })

    const projectExists = await Project.findById(project)

    if (projectExists.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    await Task.findByIdAndRemove({ _id: req.params.id })

    res.json({ message: 'Delete task' })
  } catch (error) {
    console.log(error)

    res.status(500).send('There was an error')
  }
}

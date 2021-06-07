const { validationResult } = require('express-validator')

const Project = require('../models/project')

exports.createdProject = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const project = new Project(req.body)

    project.creator = req.user.id

    project.save()

    res.json({ project })
  } catch (error) {
    console.log(error)

    res.status(400).send('There was an error')
  }
}

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ creator: req.user.id }).sort({ created: -1 })

    res.json({ projects })
  } catch (error) {
    console.log(error)

    res.status(400).send('There was an error')
  }
}

exports.updateProject = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const { name } = req.body
  const newProject = {}

  if (name) newProject.name = name

  try {
    let project = await Project.findById(req.params.id)

    if (!project) return res.status(404).json({ message: 'Project not found' })
    if (project.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true })

    res.json({ project })
  } catch (error) {
    console.log(error)

    res.status(400).send('There was an error')
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) return res.status(404).json({ message: 'Project not found' })
    if (project.creator.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' })

    await Project.findByIdAndRemove({ _id: req.params.id })

    res.json({ message: 'Delete project' })
  } catch (error) {
    console.log(error)

    res.status(400).send('There was an error')
  }
}

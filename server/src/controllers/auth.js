const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user')

exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const user = await User.findOne({ email })

    if (user) return res.status(400).json({ message: 'User does not exist' })

    const correctPassword = await bcryptjs.compare(password, user.password)

    if (!correctPassword) return res.status(400).json({ message: 'Incorrect password' })

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 }, (error, token) => {
      if (error) throw error

      res.json({ token })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.authenticatedUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')

    res.json({ user })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: 'There was an error' })
  }
}

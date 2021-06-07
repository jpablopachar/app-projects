const jwt = require('jsonwebtoken')

const authenticated = (req, res, next) => {
  const token = req.header('x-auth-token')

  if (!token) return res.status(401).json({ message: 'The token does not exist. Invalid permission' })

  try {
    const encryption = jwt.verify(token, process.env.SECRET_KEY)

    req.user = encryption.user

    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

module.exports = authenticated

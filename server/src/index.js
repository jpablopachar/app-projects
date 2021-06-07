require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDatabase = require('./db/db')

const app = express()

connectDatabase()

app.use(cors())

const port = process.env.PORT || 3000

app.use('/api/users', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/project'))
app.use('/api/tasks', require('./routes/task'))

app.listen(port, '0.0.0.0', () => console.log(`Server on port ${port}`))

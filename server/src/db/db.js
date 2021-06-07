const mongoose = require('mongoose')

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    console.log('Database is conected')
  } catch (error) {
    console.log(error)

    process.exit(1)
  }
}

module.exports = connectDatabase

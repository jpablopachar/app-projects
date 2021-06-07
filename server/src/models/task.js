const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now()
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
})

module.exports = model('Task', taskSchema)

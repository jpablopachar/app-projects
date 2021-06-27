import { ADD_TASK, CLEAN_TASK, CURRENT_TASK, DELETE_TASK, GET_TASKS, STATUS_TASK, UPDATE_TASK, VALID_TASK } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        )
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTask: false
      }
    case VALID_TASK:
      return {
        ...state,
        errorTask: true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case UPDATE_TASK:
    case STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? action.payload : task)
      }
    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload
      }
    case CLEAN_TASK:
      return {
        ...state,
        selectedTask: null
      }
    default:
      return state
  }
}

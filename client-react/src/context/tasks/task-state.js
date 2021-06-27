import PropTypes from 'prop-types'
import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import { ADD_TASK, CLEAN_TASK, CURRENT_TASK, DELETE_TASK, GET_TASKS, STATUS_TASK, UPDATE_TASK, VALID_TASK } from '../../types'
import TaskContext from './task-context'
import TaskReducer from './task-reducer'

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Choose Platform', state: true, projectId: 1 },
      { id: 2, name: 'Choose Colors', state: false, projectId: 2 },
      { id: 3, name: 'Choose Payment Platforms', state: false, projectId: 3 },
      { id: 4, name: 'Choose Hosting', state: true, projectId: 4 },
      { id: 5, name: 'Choose Colors', state: false, projectId: 1 },
      { id: 6, name: 'Choose Payment Platforms', state: false, projectId: 2 },
      { id: 7, name: 'Choose Hosting', state: true, projectId: 3 },
      { id: 8, name: 'Choose Platform', state: true, projectId: 4 }
    ],
    tasksProject: null,
    errorTask: false,
    selectedTask: null
  }
  const [state, dispatch] = useReducer(TaskReducer, initialState)
  const getTasks = (projectId) => {
    dispatch({
      type: GET_TASKS,
      payload: projectId
    })
  }
  const addTask = (task) => {
    task.id = uuid()
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }
  const validateTask = () => {
    dispatch({ type: VALID_TASK })
  }
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }
  const changeTaskStatus = task => {
    dispatch({
      type: STATUS_TASK,
      payload: task
    })
  }
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }
  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus,
        saveCurrentTask,
        updateTask,
        cleanTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

TaskState.propTypes = {
  children: PropTypes.object.isRequired
}

export default TaskState

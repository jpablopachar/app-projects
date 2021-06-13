import {
  ADD_PROJECT,
  CURRENT_PROJECT, DELETE_PROJECT, GET_PROJECT,
  PROJECT_FORM,
  VALID_FORM
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true
      }
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false
      }
    case VALID_FORM:
      return {
        ...state,
        errorForm: true
      }
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        )
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null
      }
    default:
      return state
  }
}

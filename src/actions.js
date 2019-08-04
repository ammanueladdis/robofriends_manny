import { apiCall } from './api/api'
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'


export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

//TODO: tricky async functions with redux-thunk below take note
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  apiCall("https://jsonplaceholder.typicode.com/users")  
  .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
  .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

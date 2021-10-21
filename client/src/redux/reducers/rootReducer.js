import { combineReducers } from 'redux'
import authReducer from './authReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  user: usersReducer,
  auth: authReducer,
})

export default rootReducer

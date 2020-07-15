import { combineReducers } from 'redux'
import ageReducer from './ageReducer'
import insuranceReducer from './insuranceReducer'
import todosReducer from './todosReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  age: ageReducer,
  insurance: insuranceReducer,
  todos: todosReducer,
  counter: counterReducer
})

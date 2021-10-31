import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './users';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;

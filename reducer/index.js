import { combineReducers } from 'redux';
import { attendanceReducer, createAttendanceReducer, createAttendances } from './attendances';
import { registerReducer, loginReducer } from './users';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  attendances: attendanceReducer,
  createAttendance: createAttendanceReducer,
});

export default rootReducer;

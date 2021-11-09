import { attendanceConstants } from '../../constants';
const initialState = [];

export const attendanceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case attendanceConstants.SET_ATTENDANCES:
      return [...payload];
    case attendanceConstants.GET_ALL_ATTENDANCES:
      return [...payload];
    default:
      return state;
  }
};

export const createAttendanceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case attendanceConstants.CREATE_ATTENDANCE_REQUEST:
      return {
        isMarked: false,
      };
    case attendanceConstants.CREATE_ATTENDANCE_SUCCESS:
      return {
        isMarked: true,
        payload,
      };
    case attendanceConstants.CREATE_ATTENDANCE_FAILED:
      return {
        isMarked: false,
        error: payload,
      };
    default:
      return state;
  }
};

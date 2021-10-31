import { attendanceConstants } from '../../constants';

export const setAllAttendances = (payload) => {
  return {
    type: attendanceConstants.SET_ATTENDANCES,
    payload,
  };
};

export const setAttendanceRequest = () => {
  return {
    type: attendanceConstants.ATTENDANCE_REQUEST,
  };
};

export const setAttandanceSuccess = () => {
  return {
    type: attendanceConstants.ATTENDANCE_SUCCESS,
  };
};

export const setAttendanceError = (error) => {
  return {
    type: attendanceConstants.ATTENDANCE_FAILURE,
    payload: error,
  };
};

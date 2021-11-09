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



export const createAttendanceRequest = () => {
  return {
    type: attendanceConstants.CREATE_ATTENDANCE_REQUEST,
  };
};

export const createAttendanceSuccess = (payload) => {
  return {
    type: attendanceConstants.CREATE_ATTENDANCE_SUCCESS,
    payload,
  };
};

export const createAttendanceFailed = (error) => {
  return {
    type: attendanceConstants.CREATE_ATTENDANCE_FAILED,
    error,
  };
};
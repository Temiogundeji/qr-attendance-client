import { Alert } from 'react-native';
import { attendanceAPI } from '../../shared/api';
import { storeUserData } from '../../utils/storage';
import {
  createAttendanceFailed,
  createAttendanceRequest,
  createAttendanceSuccess,
  setAllAttendances,
  setAttendanceError,
  setAttendanceRequest,
} from './attendanceCreator';

//Get all student's attendance by his id

export const getMyAttendances = (id) => {
  return (dispatch) => {
    dispatch(setAttendanceRequest());
    fetch(attendanceAPI.GET_ALL_MY_ATTENDANCES(id))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, attendances } = json;
        if (status === 'success') {
          console.log(attendances);
          dispatch(setAllAttendances(attendances));
        }
      })
      .catch((e) => {
        alert('Error', 'Some error occured, please retry');
        dispatch(setAttendanceError(e.message));
        alert(e.message);
        console.log(e.message);
      });
  };
};

export const markAttendance = (payload = {}) => {
  const { lecturerId, studentId, classId } = payload;
  return (dispatch) => {
    dispatch(createAttendanceRequest());
    return fetch(attendanceAPI.CREATE_ATTENDANCE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lecturerId: lecturerId,
        studentId,
        classId: classId,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, attendance } = json;
        if (status === 'success') {
          dispatch(createAttendanceSuccess(attendance));
          storeUserData('attendanceData', attendance);
          console.log(attendance);
          Alert.alert('Success', 'You have successfully marked the attendance for today!');
        }
      })
      .catch((err) => {
        Alert.alert(err);
        dispatch(createAttendanceFailed(err));
        console.log(err);
      });
  };
};

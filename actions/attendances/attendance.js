import { getUserData } from '../../utils/storage';
import {
  setAllAttendances,
  setAttandanceSuccess,
  setAttendanceError,
  setAttendanceRequest,
} from './attendanceCreator';

//Get all student's attendance by his id
export const getMyAttendances = () => {};

//Create new attendances for student to indicate his presence
export const createAttendance = (payload = {}) => {
  let classId = payload.classId;
  let token = '';
  getUserData('user')
    .then((record) => {
      payload.studentId = record.data.id;
      token = record.token;
    })
    .catch((err) => console.log(err));
  return (dispatch) => {
    dispatch(setFastRequest());
    return fetch(fastAPI.FAST_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((json) => {
        const { status, message } = json;
        //    console.log(json);
        if (status === 'success') {
          dispatch(saveFastDay(new Date()));
          return dispatch(createFast(fast));
        }
      })
      .catch((err) => {
        dispatch(setFastError(err));
        console.log(err);
      });
  };
};

//Generate analytics from the attendance
export const generateAttendanceAnalytics = () => {};

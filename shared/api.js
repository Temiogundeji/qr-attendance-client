const isLocal = false;
const ROOT = isLocal ? 'http://localhost:8000' : 'https://attendanceapidev.herokuapp.com';
const VERSION = 'v1';

export const userAPI = {
  USER_LOGIN_ENDPOINT: `${ROOT}/api/${VERSION}/auth/student/login`,
  USER_REGISTER_ENDPOINT: `${ROOT}/api/${VERSION}/auth/student/register`,
  USER_PROFILE_UPDATE: '',
};

export const attendanceAPI = {
  CREATE_ATTENDANCE: `${ROOT}/api/${VERSION}/attendances`,
  GET_ALL_MY_ATTENDANCES: (studentId) => `${ROOT}/api/${VERSION}/student/attendances/${studentId}`,
};

export const departmentAPI = {
  GET_ALL_DEPARTMENTS: `${ROOT}/api/${VERSION}/departments`,
};

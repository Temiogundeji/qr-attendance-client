import { departmentConstants } from '../../constants/departments';

export const setAllDepartments = (payload) => {
  return {
    type: departmentConstants.DEPARTMENT_SUCCESS,
    payload,
  };
};

export const setDepartmentRequest = () => {
  return {
    type: departmentConstants.DEPARTMENT_REQUEST,
  };
};

export const setDepartmentError = (error) => {
  return {
    type: departmentConstants.DEPARTMENT_ERROR,
    payload: error,
  };
};

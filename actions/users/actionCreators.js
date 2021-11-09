import { userConstants } from '../../constants';

export const setLoginSuccess = (payload) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload,
  };
};

export const setLoginRequest = () => {
  return {
    type: userConstants.LOGIN_REQUEST,
  };
};

export const setLoginError = (error) => {
  return {
    type: userConstants.LOGIN_FAILURE,
    payload: error,
  };
};
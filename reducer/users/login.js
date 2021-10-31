import { userConstants } from '../../constants';
import { getUserData } from '../../utils/storage';

const initialState =
  getUserData('user') !== null || {}
    ? { isLoggedIn: true, user: getUserData('user') }
    : { isLoading: false, isLoggedIn: false, token: '', data: '' };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

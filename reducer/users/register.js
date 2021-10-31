import { userConstants } from '../../constants';

const initialState = {
  token: '',
  isLoading: false,
  message: null,
  isRegistered: false,
  hasError: false,
};

export const registerReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case userConstants.REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

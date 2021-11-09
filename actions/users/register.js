import { Alert } from 'react-native';
import { userAPI } from '../../shared/api';
import { setLoginSuccess, setLoginRequest, setLoginError } from './actionCreators';
import { storeUserData } from '../../utils/storage';

export const register = (loginInput, callback = () => {}) => {
  return (dispatch) => {
    dispatch(setLoginRequest());
    return fetch(userAPI.USER_REGISTER_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInput),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, data, token, message } = json;
        if (status === 'success') {
          let user = { data, token };
          storeUserData('user', user);
          dispatch(setLoginSuccess(data));
          Alert.alert('Registeration successful', message);
          callback();
        }
      })
      .catch((err) => {
        Alert.alert('Error', 'Some error occured, please retry');
        dispatch(setLoginError(err));
        console.log(err);
      });
  };
};

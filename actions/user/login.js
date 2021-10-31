import { Alert } from 'react-native';
import { userAPI } from '../../shared/api';
import { setLoginSuccess, setLoginRequest, setLoginError } from './actionCreators';
import { storeUserData } from '../../utils/storage';

export const login = (loginInput, callback = () => {}) => {
  const { email, password } = loginInput;
  return (dispatch) => {
    dispatch(setLoginRequest());
    return fetch(userAPI.USER_LOGIN_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, data, token, message } = json;
        if (status === 'success') {
          let user = { data, token };
          storeUserData('user', user);
          dispatch(setLoginSuccess(data));
          Alert.alert('Login Succesful', message);
          callback();
        } else {
          Alert.alert('Login Failed', 'Email or Password is incorrect');
        }
      })
      .catch((err) => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        dispatch(setLoginError(err));
        console.log(err);
      });
  };
};

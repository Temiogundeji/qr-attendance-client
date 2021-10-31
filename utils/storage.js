import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing User Data
export const storeUserData = async (title, data) => {
  try {
    await AsyncStorage.setItem(title, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async (title) => {
  try {
    const jsonValue = await AsyncStorage.getItem(title);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    // error reading value
    Alert.alert('Opps!', 'Something went wrong.');
    console.log('Something went wrong', err);
  }
};

export const EMAIL_VALIDATION_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../shared/global';
import { Button, Text, Input, Select, SelectItem, IndexPath } from '@ui-kitten/components';

import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { EMAIL_VALIDATION_REGEXP } from '../utils/storage';
import { fetchAllDepartments } from '../actions/department';
import { register } from '../actions/user';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { departmentAPI } from '../shared/api';

// import TextField from '../components/TextField';
//Todo: Add Icon to text fields
//Todo: Add loader to registeration from when button is clicked

const RegisterScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  // const [isFetchingDepartments, setIsFetchingDepartments] = useState(false);
  const [myDepartments, setMyDepartments] = useState({});
  const [selectedItem, setSelectedItem] = useState('');

  // const successCallback = (data) => {
  //   setDepartments(data);
  // };

  // const errorCallback = (error) => {
  //   setIsFetchingDepartments(false);
  //   setResponseMessage(error);
  // };

  // const emptyCallback = (error) => {
  //   setIsFetchingDepartments(false);
  // };
  // const callback = {
  //   success: successCallback,
  //   error: errorCallback,
  //   empty: emptyCallback,
  // };

  // const fetchDepartmentsFromServer = (callback) => {
  //   setIsFetchingDepartments(true);
  //   fetchAllDepartments(callback);
  // };

  // useEffect(() => {
  //   fetchDepartmentsFromServer(callback);
  // }, []);

  useEffect(() => {
    fetch(departmentAPI.GET_ALL_DEPARTMENTS)
      .then((response) => response.json())
      .then((data) => {
        //Successful response from the API Call
        // console.log(data);
        setMyDepartments(data.departments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(myDepartments);
  //route to home on successful registration
  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'HomeScreen' }],
      })
    );
  };

  const onSubmit = (data) => dispatch(register(data, navigateToHome));

  return (
    <View style={[Styles.container, globalStyles.background]}>
      <View style={Styles.header}>
        <Text style={[globalStyles.headingText]}>Hi FPIite!</Text>
        <Text style={[globalStyles.normalText]}>Welcome Back</Text>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Username</Text>
            <Input
              style={Styles.fields}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="adeadam"
            />
          </View>
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={Styles.errorStyle}>A valid email address is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: EMAIL_VALIDATION_REGEXP,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Email</Text>
            <Input
              style={Styles.fields}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="ade@gmail.com"
            />
          </View>
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={Styles.errorStyle}>A valid email address is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Password</Text>
            <Input
              style={Styles.fields}
              onBlur={onBlur}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              placeholder="******"
            />
          </View>
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={Styles.errorStyle}>Password is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ value, onChange }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Department</Text>
            <SearchableDropdown
              onTextChange={(text) => setSelectedItem(text)}
              // setSelectedItem={()}
              selectedItem={value}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: '#222',
              }}
              itemsContainerStyle={{
                maxHeight: '40%',
              }}
              items={myDepartments}
              defaultIndex={1}
              placeholder="Select department"
              resetValue={false}
              underlineColorAndroid="transparent"
            />
          </View>
        )}
        name="departments"
        defaultValue="department"
      />

      {errors.departments && <Text style={Styles.errorStyle}>Department is required.</Text>}
      <View style={Styles.Buttons}>
        <Button onPress={handleSubmit(onSubmit)} appearance="filled" style={Styles.button}>
          <Text style={Styles.registerText}>Register</Text>
        </Button>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
    paddingTop: 50,
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  SubHeading: {
    marginRight: 100,
  },
  Buttons: {
    display: 'flex',
    marginTop: 40,
  },
  inputLabel: {
    fontSize: 12,
    marginBottom: 10,
    color: '#ffffff',
    marginTop: 12,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    marginBottom: 20,
  },
  fields: {
    width: '100%',
  },
  fieldRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldStyle: {
    marginBottom: 5,
    width: '100%',
  },
  registerText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'arlon-medium',
  },
  rowElement: {
    width: '49.5%',
  },
  errorStyle: {
    color: '#ff0011',
    fontSize: 12,
  },
});

export default RegisterScreen;

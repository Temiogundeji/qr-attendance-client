import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../shared/global';
import { Button, Text, Input, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/routers';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { EMAIL_VALIDATION_REGEXP } from '../utils/storage';
import { Picker } from '@react-native-picker/picker';
import { register } from '../actions/users';
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
  const [myDepartments, setMyDepartments] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [selectedLevel, setSelectedLevel] = useState();
  const isLoading = useSelector((state) => state.register.isLoading);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch(departmentAPI.GET_ALL_DEPARTMENTS)
      .then((response) => response.json())
      .then((data) => {
        //Successful response from the API Call
        console.log(data);
        setMyDepartments(data.departments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   setIsSubmitting(isLoading);
  // }, [isLoading]);

  //route to home on successful registration
  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'HomeScreen' }],
      })
    );
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    data.departmentId = selectedDepartment;
    data.levelId = selectedLevel;
    dispatch(register(data, navigateToHome));
    setIsSubmitting(false);
  };

  return (
    <View style={[Styles.container, globalStyles.background]}>
      <View style={Styles.header}>
        <Text style={[globalStyles.headingText]}>Hi FPIite!</Text>
        <Text style={[globalStyles.normalText]}>Getting Started</Text>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? <ActivityIndicator size={30} color="#ffffff" /> : null}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Username</Text>
            <Input placeholder="adeadam" onBlur={onBlur} onChangeText={onChange} value={value} />
          </View>
        )}
        name="username"
        defaultValue=""
      />
      {errors.username && <Text style={Styles.errorStyle}>Username is required.</Text>}
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
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => ( */}
      <View style={Styles.fieldStyle}>
        <Text style={Styles.inputLabel}>Department</Text>
        <Picker
          selectedValue={selectedDepartment}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedDepartment(itemValue);
            console.log(itemValue);
          }}
          style={{ backgroundColor: '#ffffff', borderRadius: 4, color: '#999', fontSize: 12 }}
        >
          <Picker.Item label="Computer Science" value={1} />
          <Picker.Item label="Electrical Engineering" value={2} />
          <Picker.Item label="Surveying and Geo-informatics" value={3} />
          <Picker.Item label="Office Technology Management" value={4} />
        </Picker>
      </View>
      {/* )}
        name="departmentId"
        defaultValue=""
      />
      {errors.departmentId && <Text style={Styles.errorStyle}>Department is required.</Text>} */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Styles.fieldStyle}>
            <Text style={Styles.inputLabel}>Password</Text>
            <Input
              secureTextEntry
              placeholder="*******"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={Styles.errorStyle}>Password is required.</Text>}
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => ( */}
      <View style={Styles.fieldStyle}>
        <Text style={Styles.inputLabel}>Level</Text>
        <Picker
          selectedValue={selectedLevel}
          name="levelId"
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLevel(itemValue);
          }}
          style={{ backgroundColor: '#ffffff', borderRadius: 4, color: '#999', fontSize: 12 }}
        >
          <Picker.Item label="ND 1" value={1} />
          <Picker.Item label="ND 2" value={2} />
          <Picker.Item label="HND 1" value={3} />
          <Picker.Item label="HND 2" value={4} />
        </Picker>
      </View>
      {/* )}
        name="levelId"
        defaultValue=""
      /> */}
      {/* {errors.levelId && <Text style={Styles.errorStyle}>Level is required.</Text>} */}
      <View style={Styles.Buttons}>
        <Button onPress={handleSubmit(onSubmit)} appearance="filled" style={Styles.button}>
          <Text style={Styles.registerText}>Register</Text>
        </Button>
      </View>
    </View>
  );
};;

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
    fontFamily: 'arlon-medium',
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

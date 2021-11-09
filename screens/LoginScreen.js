import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../shared/global';
import { Button, Text, Input } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { EMAIL_VALIDATION_REGEXP } from '../utils/storage';
import { login } from '../actions/users/login';
import { CommonActions } from '@react-navigation/native';
// import TextField from '../components/TextField';
//Todo: Add Icon to text fields

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.isLoading);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    dispatch(login(data, navigateToHome));
    setIsSubmitting(false);
  };

  return (
    <View style={[Styles.container, globalStyles.background]}>
      <View style={Styles.header}>
        <Text style={[globalStyles.headingText]}>Hi FPIite!</Text>
        <Text style={[globalStyles.normalText]}>Welcome Back</Text>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? <ActivityIndicator size={30} color="#ffffff" /> : null}
      </View>
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
      <View style={Styles.Buttons}>
        <Button onPress={handleSubmit(onSubmit)} appearance="filled" style={Styles.button}>
          <Text style={Styles.registerText}>Login</Text>
          {/* {isLoading ? <ActivityIndicator color="#fff" size={20} /> : null} */}
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
    paddingTop: 150,
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

export default LoginScreen;

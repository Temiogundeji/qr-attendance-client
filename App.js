import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import AppNavigation from './navigations/AppNavigation';
import { setCustomText } from 'react-native-global-props';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { store } from './store';
import { Provider } from 'react-redux';

const customFonts = {
  'arlon-medium': require('./assets/fonts/Arlon-medium.ttf'),
  'openSans-light': require('./assets/fonts/OpenSans-Light.ttf'),
  ...Ionicons.font,
};

const customTextProps = {
  style: {
    fontFamily: 'openSans-light',
    color: '#fff',
  },
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  });

  if (fontsLoaded) {
    setCustomText(customTextProps);
  } else {
    return (
      <AppLoading
        startAsync={_loadFontsAsync}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigation />
      </ApplicationProvider>
    </Provider>
  );
}

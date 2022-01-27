import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { SplashView } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export default () => {
  return (
    <Navigator initialRouteName={Routes.SPLASH}>
      <Screen
        name={Routes.SPLASH}
        component={SplashView}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
    </Navigator>
  );
};

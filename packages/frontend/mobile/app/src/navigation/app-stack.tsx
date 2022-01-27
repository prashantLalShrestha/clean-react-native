import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashStack } from '@mobile/ui';
import { Routes } from './routes';

export type AppStackParamList = {
  [Routes.SPLASH]: undefined;
  [Routes.AUTH]: undefined;
};

const { Group, Navigator, Screen } =
  createNativeStackNavigator<AppStackParamList>();

export default () => {
  return (
    <Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Group screenOptions={{ headerShown: false }}>
        <Screen component={SplashStack} name={Routes.SPLASH} />
      </Group>
    </Navigator>
  );
};

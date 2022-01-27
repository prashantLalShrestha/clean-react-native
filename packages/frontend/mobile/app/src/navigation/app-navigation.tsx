import {
  createNavigationContainerRef,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import React from 'react';
import AppStack from './app-stack';

const navigationRef =
  createNavigationContainerRef<{[name: string]: object | undefined}>();

export const getAppNavigation = () => ({
  navigate: (name: string, params?: object): void =>
    navigationRef.current?.navigate(name, params),
  pop: (count?: number) => navigationRef.dispatch(StackActions.pop(count)),
  popToTop: () => navigationRef.dispatch(StackActions.popToTop()),
  push: (name: string, params?: object): void =>
    navigationRef.dispatch(StackActions.push(name, params)),
  replace: (name: string, params?: object): void =>
    navigationRef.dispatch(StackActions.replace(name, params)),
});

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

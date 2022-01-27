import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDIContextProvider } from './di';
import { AppFlowContextProvider } from './flow';
import AppNavigation from './navigation';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <AppDIContextProvider>
          <AppFlowContextProvider>
            <AppNavigation />
          </AppFlowContextProvider>
        </AppDIContextProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;

import { ServiceFactoryProvider } from '@mobile/base';
import React, { FC } from 'react';
import AppDI from './app-di';

export const AppDIContextProvider: FC = ({ children }) => {
  return (
    <ServiceFactoryProvider value={new AppDI()}>
      {children}
    </ServiceFactoryProvider>
  );
};

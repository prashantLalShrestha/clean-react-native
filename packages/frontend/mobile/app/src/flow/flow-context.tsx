import { FlowFactoryProvider } from '@mobile/base';
import React, { FC } from 'react';
import AppFlow from './app-flow';

export const AppFlowContextProvider: FC = ({ children }) => (
  <FlowFactoryProvider value={new AppFlow()}>{children}</FlowFactoryProvider>
);

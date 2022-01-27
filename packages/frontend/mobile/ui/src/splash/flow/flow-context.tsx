import { useFlowFactory } from '@mobile/base';
import React, { createContext, FC, useContext } from 'react';
import { SplashFlow, SplashFlowFactory } from '.';

const defaultSplashFlow: SplashFlow = {
  toAuth() {
    console.warn('SplashFlow: toAuth() function is nor implemented');
  },
};

const SplashFlowContext = createContext<SplashFlow>(defaultSplashFlow);

export const SplashFlowContextProvider: FC = ({ children }) => {
  const di = useFlowFactory<SplashFlowFactory>();
  const flow = di.splashFlow();

  return (
    <SplashFlowContext.Provider value={flow}>
      {children}
    </SplashFlowContext.Provider>
  );
};

export const useSplashFlow = () => useContext(SplashFlowContext);

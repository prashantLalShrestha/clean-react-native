import React, { createContext, FC, useContext } from 'react';
import { useServiceFactory } from '@mobile/base';
import { SplashDI } from '../di';
import { useSplashFlow } from '../flow';
import SplashViewModel from './splash-viewmodel';

const SplashViewModelContext = createContext<SplashViewModel | unknown>({});

export const SplashViewModelContextProvider: FC = ({ children }) => {
  const di = useServiceFactory<SplashDI>();
  const flow = useSplashFlow();
  const viewModel = new SplashViewModel(di.authRepository(), {
    toAuth: flow.toAuth,
  });
  return (
    <SplashViewModelContext.Provider value={viewModel}>
      {children}
    </SplashViewModelContext.Provider>
  );
};

export const useSplashViewModel = () =>
  useContext(SplashViewModelContext) as SplashViewModel;

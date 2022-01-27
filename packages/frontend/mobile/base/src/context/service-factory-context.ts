import {createContext, useContext} from 'react';

const ServiceFactoryContext = createContext<object>({});

export const ServiceFactoryProvider = ServiceFactoryContext.Provider;

export const ServiceFactoryConsumer = ServiceFactoryContext.Consumer;

export function useServiceFactory<T extends object>(fallback?: T): T {
  const factory = useContext(ServiceFactoryContext);
  if (fallback) {
    return {...fallback, factory};
  }
  return factory as T;
}

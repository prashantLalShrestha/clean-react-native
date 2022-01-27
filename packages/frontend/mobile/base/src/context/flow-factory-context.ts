import {createContext, useContext} from 'react';

const FlowFactoryContext = createContext<object>({});

export const FlowFactoryProvider = FlowFactoryContext.Provider;

export const FlowFactoryConsumer = FlowFactoryContext.Consumer;

export function useFlowFactory<T extends object>(fallback?: T): T {
  const factory = useContext(FlowFactoryContext);
  if (fallback) {
    return {...fallback, factory};
  }
  return factory as T;
}

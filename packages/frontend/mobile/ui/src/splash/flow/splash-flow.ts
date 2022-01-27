export interface SplashFlow {
  toAuth(): void;
}

export interface SplashFlowFactory {
  splashFlow(): SplashFlow;
}

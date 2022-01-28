import { action, makeObservable, observable } from 'mobx';
import { AuthRepository } from '@services/domain';

export interface SplashViewFlow {
  toAuth(): void;
}

class SplashViewModel {
  authRepository: AuthRepository;
  splashViewFlow: SplashViewFlow;

  title: string = 'Hello from React Native';
  count: number = 0;

  constructor(authRepository: AuthRepository, splashViewFlow: SplashViewFlow) {
    this.authRepository = authRepository;
    this.splashViewFlow = splashViewFlow;

    makeObservable(this, {
      title: observable,
      count: observable,
      login: action,
    });
  }

  login() {
    this.authRepository.login('Username', 'password');
    this.count++;
  }
}

export default SplashViewModel;

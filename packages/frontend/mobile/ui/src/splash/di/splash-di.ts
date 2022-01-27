import { AuthRepository } from '@services/domain';

interface SplashDI {
  authRepository(): AuthRepository;
}

export default SplashDI;

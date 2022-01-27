import { AuthRepository } from '@services/domain';
import { DefaultAuthRepository } from '@services/platform';
import { SplashDI } from '@mobile/ui';

export default class AppDI implements SplashDI {
  authRepository(): AuthRepository {
    return new DefaultAuthRepository();
  }
}

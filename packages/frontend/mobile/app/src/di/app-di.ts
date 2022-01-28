import { AuthRepository } from '@services/domain';
import { DefaultAuthRepository } from '@services/platform';
import { DefaultAuthRemote } from '@services/remote';
import { DefaultAuthCredentialStore } from '@services/store';
import { SplashDI } from '@mobile/ui';

export default class AppDI implements SplashDI {
  authRepository(): AuthRepository {
    const authRemote = new DefaultAuthRemote();
    const authCredentialStore = new DefaultAuthCredentialStore();
    return new DefaultAuthRepository(authRemote, authCredentialStore);
  }
}

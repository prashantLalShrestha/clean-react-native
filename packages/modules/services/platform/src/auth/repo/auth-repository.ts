import { AuthRepository } from '@services/domain';
import AuthRemote from '../contract/remote/auth-remote';
import AuthCredentialStore from '../contract/store/auth-credential-store';

class DefaultAuthRepository implements AuthRepository {
  authRemote: AuthRemote;
  authCredentialStore: AuthCredentialStore;

  constructor(
    authRemote: AuthRemote,
    authCredentialStore: AuthCredentialStore,
  ) {
    this.authRemote = authRemote;
    this.authCredentialStore = authCredentialStore;
  }

  login(username: string, password: string) {
    const authToken = this.authRemote.login(username, password);
    this.authCredentialStore.storeToken(authToken);
  }
}

export default DefaultAuthRepository;

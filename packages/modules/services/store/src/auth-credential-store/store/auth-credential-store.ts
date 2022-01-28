import { AuthCredentialStore } from '@services/platform';

class DefaultAuthCredentialStore implements AuthCredentialStore {
  storeToken(authToken: string): void {
    console.log(`saved ${authToken}`);
  }
}

export default DefaultAuthCredentialStore;

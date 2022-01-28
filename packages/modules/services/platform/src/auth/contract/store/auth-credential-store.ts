interface AuthCredentialStore {
  storeToken(authToken: string): void;
}

export default AuthCredentialStore;

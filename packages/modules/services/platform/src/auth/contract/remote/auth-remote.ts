interface AuthRemote {
  login: (username: string, password: string) => string;
}

export default AuthRemote;

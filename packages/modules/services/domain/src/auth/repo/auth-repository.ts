interface AuthRepository {
  login: (username: string, password: string) => void;
}

export default AuthRepository;

import { AuthRepository } from '@services/domain';

class DefaultAuthRepository implements AuthRepository {
  login() {
    console.log('Auth login');
  }
}

export default DefaultAuthRepository;

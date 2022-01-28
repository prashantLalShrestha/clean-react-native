import { AuthRemote } from '@services/platform';

class DefaultAuthRemote implements AuthRemote {
  login(username: string, password: string): string {
    console.log(`Auth login: ${username}: ${password}`);
    return 'authtoken';
  }
}

export default DefaultAuthRemote;

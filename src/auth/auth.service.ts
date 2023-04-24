import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'sined in';
  }
  signed() {
    return 'signed in';
  }
}

const service = new AuthService();

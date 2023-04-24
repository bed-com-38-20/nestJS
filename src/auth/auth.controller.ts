import { Controller, Post } from '@nestjs/common';
import { Sign } from 'crypto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  //
  @Post('signup')
  Signup() {
    return this.authservice.signed();
  }
  @Post('signing')
  Signin() {
    return this.authservice.login();
  }
}

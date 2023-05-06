import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //post route for loggin in
  @Post('login')
  login(): any {
    return {};
  }

  //get
  @Get('protected')
  getPosts(): string {
    return this.appService.getPosts();
  }
}

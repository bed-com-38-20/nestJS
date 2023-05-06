import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      Id: 1,
      name: 'evan',
      username: 'root',
      password: 'chimwaza',
    },
    {
      Id: 2,
      name: 'choice6',
      username: 'miriam',
      password: 'guess',
    },
  ];

  // allowinf us tinfind user by the usename
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

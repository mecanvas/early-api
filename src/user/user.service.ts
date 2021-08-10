import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User.entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findOne(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }
}

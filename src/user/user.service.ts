import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User.entities';
import { hash } from 'bcrypt';
import { UserSignUpDto } from './dto/UserSingUpDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findOne(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async userRegister(data: UserSignUpDto) {
    const { address, addressDetail, email, password, phone, username } = data;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return false;
    }
    const hashedPassword = await hash(password, 9);
    await this.userRepository.save({
      email,
      password: hashedPassword,
      phone,
      username,
      address,
      addressDetail,
    });

    return true;
  }
}

import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/User.entities';
import { Repository } from 'typeorm';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.UserRepository.findOneOrFail(
      {
        id: +userId,
      },
      {
        select: ['id', 'email'],
      },
    )
      .then((user) => {
        console.log('user', user);
        done(null, user);
      })
      .catch((error) => done(error));
  }
}

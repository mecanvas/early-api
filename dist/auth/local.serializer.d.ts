import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/user/entities/User.entities';
import { Repository } from 'typeorm';
export declare class LocalSerializer extends PassportSerializer {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    serializeUser(user: User, done: CallableFunction): void;
    deserializeUser(userId: string, done: CallableFunction): Promise<any>;
}

import { Repository } from 'typeorm';
import { User } from './entities/User.entities';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
}

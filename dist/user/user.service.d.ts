import { Repository } from 'typeorm';
import { User } from './entities/User.entities';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User>;
}

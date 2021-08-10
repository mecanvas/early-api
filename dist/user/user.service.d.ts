import { Repository } from 'typeorm';
import { User } from './entities/User.entities';
import { UserSignUpDto } from './dto/UserSingUpDto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User>;
    userRegister(data: UserSignUpDto): Promise<boolean>;
}

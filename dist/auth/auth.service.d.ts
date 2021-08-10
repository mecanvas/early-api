import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/User.entities';
import { Repository } from 'typeorm';
export declare class AuthService {
    private UserRepository;
    private jwtService;
    constructor(UserRepository: Repository<User>, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}

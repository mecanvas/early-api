import { AuthService } from 'src/auth/auth.service';
import { UserSignUpDto } from './dto/UserSingUpDto';
import { User } from './entities/User.entities';
import { UserService } from './user.service';
export declare class UserController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    getMe(req: any): Promise<User>;
    login(req: any, res: any): Promise<any>;
    register(data: UserSignUpDto): Promise<string>;
    logout(res: any): Promise<any>;
}

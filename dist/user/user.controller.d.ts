import { AuthService } from 'src/auth/auth.service';
import { UserSignUpDto } from './dto/UserSingUpDto';
import { UserService } from './user.service';
export declare class UserController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: any, res: any): Promise<any>;
    getMe(req: any): any;
    register(data: UserSignUpDto): Promise<string>;
    logout(res: any): Promise<any>;
}

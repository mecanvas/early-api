import { AuthService } from 'src/auth/auth.service';
export declare class UserController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, res: any): Promise<any>;
    getMe(req: any): any;
}

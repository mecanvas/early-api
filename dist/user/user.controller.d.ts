import { AuthService } from 'src/auth/auth.service';
export declare class UserController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getMe(req: any): Promise<any>;
}

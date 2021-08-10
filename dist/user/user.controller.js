"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../auth/auth.service");
const jwt_auth_guard_1 = require("../auth/jwt.auth.guard");
const local_auth_guard_1 = require("../auth/local.auth.guard");
const constants_1 = require("../constants");
const UserSignInDto_1 = require("./dto/UserSignInDto");
const UserSingUpDto_1 = require("./dto/UserSingUpDto");
const User_entities_1 = require("./entities/User.entities");
const user_service_1 = require("./user.service");
const isProd = process.env.NODE_ENV === 'production';
const options = (login) => {
    const option = {
        maxAge: login ? 1000 * 60 * 60 * 24 * 7 : 0,
        path: '/',
        domain: isProd ? constants_1.COOKIE_URL : 'localhost',
        httpOnly: isProd,
        secure: isProd,
        sameSite: isProd ? 'none' : 'lax',
    };
    return option;
};
let UserController = class UserController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async getMe(req) {
        const user = this.userService.findOne(req.user.email);
        return user;
    }
    async login(req, res) {
        const token = await this.authService.login(req.user);
        await res.cookie('early_auth', token, options(true));
        return res.status(200).send(req.user);
    }
    async register(data) {
        const user = await this.userService.findOne(data.email);
        if (user) {
            throw new common_1.ForbiddenException();
        }
        const result = this.userService.userRegister(data);
        if (result) {
            return 'ok';
        }
        else {
            throw new common_1.ForbiddenException();
        }
    }
    async logout(res) {
        res.clearCookie('early_auth', options(false));
        return res.send('ok');
    }
};
__decorate([
    swagger_1.ApiCookieAuth('early_auth'),
    swagger_1.ApiOperation({ summary: '유저 정보 획득' }),
    swagger_1.ApiResponse({
        status: 201,
        type: User_entities_1.User,
        description: '유저의 정보',
    }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMe", null);
__decorate([
    swagger_1.ApiCookieAuth('early_auth'),
    swagger_1.ApiBody({ type: UserSignInDto_1.UserSignInDto }),
    swagger_1.ApiOperation({ summary: '유저 로그인' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'early_auth 이름의 쿠키 제공',
    }),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    swagger_1.ApiOperation({ summary: '유저 회원가입' }),
    swagger_1.ApiBody({
        type: UserSingUpDto_1.UserSignUpDto,
    }),
    swagger_1.ApiResponse({
        status: 201,
    }),
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserSingUpDto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    swagger_1.ApiOperation({ summary: '유저 로그아웃' }),
    swagger_1.ApiResponse({
        status: 201,
    }),
    common_1.Post('logout'),
    __param(0, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
UserController = __decorate([
    swagger_1.ApiTags('유저 관련'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
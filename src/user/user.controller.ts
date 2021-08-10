import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Res,
  Response,
  Body,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CookieOptions } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { COOKIE_URL } from 'src/constants';
import { UserSignInDto } from './dto/UserSignInDto';
import { UserSignUpDto } from './dto/UserSingUpDto';
import { User } from './entities/User.entities';
import { UserService } from './user.service';

const isProd = process.env.NODE_ENV === 'production';

// true면 7일 유지할 수 있게.  false면 파괴
const options = (login: boolean) => {
  const option: CookieOptions = {
    // 7일
    maxAge: login ? 1000 * 60 * 60 * 24 * 7 : 0,
    path: '/',
    domain: isProd ? COOKIE_URL : 'localhost',
    httpOnly: isProd,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
  };
  return option;
};

@ApiTags('유저 관련')
@Controller('auth')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @ApiCookieAuth('early_auth')
  @ApiOperation({ summary: '유저 정보 획득' })
  @ApiResponse({
    status: 201,
    type: User,
    description: '유저의 정보',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getMe(@Request() req) {
    const user = this.userService.findOne(req.user.email);

    return user;
  }

  @ApiCookieAuth('early_auth')
  @ApiBody({ type: UserSignInDto })
  @ApiOperation({ summary: '유저 로그인' })
  @ApiResponse({
    status: 200,
    description: 'early_auth 이름의 쿠키 제공',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user);
    await res.cookie('early_auth', token, options(true));
    return res.status(200).send(req.user);
  }

  @ApiOperation({ summary: '유저 회원가입' })
  @ApiBody({
    type: UserSignUpDto,
  })
  @ApiResponse({
    status: 201,
  })
  @Post('register')
  async register(@Body() data: UserSignUpDto) {
    const user = await this.userService.findOne(data.email);

    if (user) {
      throw new ForbiddenException();
    }

    const result = this.userService.userRegister(data);

    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }

  @ApiOperation({ summary: '유저 로그아웃' })
  @ApiResponse({
    status: 201,
  })
  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('early_auth', options(false));
    return res.send('ok');
  }
}

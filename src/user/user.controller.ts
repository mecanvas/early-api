import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Res,
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
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { UserSignInDto } from './dto/UserSignInDto';
import { UserSignUpDto } from './dto/UserSingUpDto';
import { User } from './entities/User.entities';
import { UserService } from './user.service';

@ApiTags('유저 관련')
@Controller('auth')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @ApiCookieAuth('early_auth')
  @ApiBody({ type: UserSignInDto })
  @ApiOperation({ summary: '유저 로그인' })
  @ApiResponse({
    status: 201,
    description: 'early_auth 이름의 쿠키 제공',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user);
    await res.cookie('early_auth', token);
    return req.user;
  }

  @ApiCookieAuth('early_auth')
  @ApiOperation({ summary: '유저 정보 획득' })
  @ApiResponse({
    status: 201,
    type: User,
    description: '유저의 정보',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  getMe(@Request() req) {
    return req.user;
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
}

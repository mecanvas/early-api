import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@ApiTags('유저 관련')
@Controller('auth')
export class UserController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMe(@Req() req) {
    return req.user;
  }
}

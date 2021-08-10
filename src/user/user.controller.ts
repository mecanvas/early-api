import { Controller, Post, Request, UseGuards, Get, Res } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@ApiTags('유저 관련')
@Controller('auth')
export class UserController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token = await (await this.authService.login(req.user)).access_token;
    await res.cookie('early_auth', token);
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getMe(@Request() req) {
    return req.user;
  }
}

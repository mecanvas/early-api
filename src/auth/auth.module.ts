import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/User.entities';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    ConfigService,
    TypeOrmModule.forFeature([User]),
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '3600' },
    }),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

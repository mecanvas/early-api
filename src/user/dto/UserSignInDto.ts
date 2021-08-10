import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserSignInDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'email@naver.com',
    description: '로그인에 사용될 고유의 이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '123124s',
    description: '로그인에 사용될 비밀번호',
  })
  public password: string;
}

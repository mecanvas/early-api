import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserSignUpDto {
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

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '123124s',
    description: '로그인에 사용될 비밀번호 확인',
  })
  public validPassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '김창회',
    description: '유저의 이름',
  })
  public username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '01026299315',
    description: '연락 가능한 핸드폰 번호',
  })
  public phone: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '경기도 성남시 분당구',
    description: '유저의 주소지',
  })
  public address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '이매촌 금강아파트 103동 1001호',
    description: '유저의 상세 주소지',
  })
  public addressDetail: string;
}

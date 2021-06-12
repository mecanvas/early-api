import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CanvasSaveRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '김창회',
    description: '유저이름',
  })
  public username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'sample123@gmail.com',
    description: '이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'S-1호,S-2호',
    description: '액자의 종이 이름들',
  })
  public paper: string;
}

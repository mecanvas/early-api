import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CanvasSaveRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '김창회',
    description: '유저이름',
  })
  public username: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '01026299315',
    description: '핸드폰번호',
  })
  public phone: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '네이버',
    description: '주문 경로',
  })
  public orderRoute: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://~~!',
    description: '원본 이미지',
  })
  public originImgUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'S-1호,S-2호',
    description: '액자의 종이 이름들',
  })
  public paperNames: string;
}

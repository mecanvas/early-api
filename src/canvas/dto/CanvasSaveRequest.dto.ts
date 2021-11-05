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

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '01026299315',
    description: '핸드폰번호',
  })
  public phone: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1 = 캔버스 2= 포스터',
    description: '타입 번호',
  })
  public type: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1 = 기본 2= 배경 3= 좌우반전',
    description: '옆면 스케일 정보',
  })
  public scaleType: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1 = 쿠팡, 2= 네이버, 3= 아이디어스',
    description: '주문 경로',
  })
  public orderRoute: number;

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

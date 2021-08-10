import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'early-api', name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @ApiProperty()
  id: number;

  @Column('varchar', { name: 'email' })
  @ApiProperty()
  email: string;

  @Column('varchar', { name: 'password', length: 100 })
  @ApiProperty()
  password: string;

  @Column('int', { name: 'role', default: 0 })
  @ApiProperty({
    description: '0 = 일반 유저, 1 = 어드민 ',
  })
  role: 0 | 1;

  @Column('varchar', { name: 'username' })
  @ApiProperty()
  username: string;

  @Column('varchar', { name: 'phone' })
  @ApiProperty()
  phone: string;

  @Column('varchar', { name: 'address' })
  @ApiProperty({
    example: '경기도 성남시 분당구',
    description: '유저의 주소지',
  })
  address: string;

  @Column('varchar', { name: 'addressDetail' })
  @ApiProperty({
    example: '이매촌 금강아파트 103동 1001호',
    description: '유저의 상세 주소',
  })
  addressDetail: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}
